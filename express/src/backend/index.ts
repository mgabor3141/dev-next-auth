import express from "express";
import { ExpressAuth, getSession, type ExpressAuthConfig } from "@auth/express";
import { remultExpress } from "remult/remult-express";
import type { AuthConfig } from "@auth/core";
import type { UserInfo } from "remult";
import Credentials from "@auth/express/providers/credentials";
import { config } from "dotenv";
import { AuthController } from "../shared/AuthController";
config();
export const app = express();
app.set("trust proxy", true);

const validUsers = ["Jane", "Alex"];
const authConfig: AuthConfig = {
  providers: [
    Credentials({
      credentials: {
        name: {
          placeholder: "Try " + validUsers.join(" or "),
        },
      },
      authorize: (credentials) => {
        const name = credentials.name as string;
        return validUsers.includes(name)
          ? {
              id: name,
              name,
            }
          : null;
      },
    }),
  ],
  callbacks: {
    session: ({ session, user }) => {
      user = user ?? session.user;
      const result = {
        ...session,
        user: {
          id: user?.name!,
          name: user?.name!,
        },
      };
      return result;
    },
  },
};

app.use("/auth/*", ExpressAuth(authConfig));

export const api = remultExpress({
  controllers: [AuthController],
  getUser: async (req) => {
    return (await getSession(req, authConfig))?.user as UserInfo;
  },
});

app.use(api);
