import express from 'express'
import { ExpressAuth, getSession } from '@auth/express'
import { remultExpress } from 'remult/remult-express'
import type { AuthConfig } from '@auth/core'
import type { UserInfo } from 'remult'
import { JsonFileDataProvider } from 'remult/server'
import Credentials from '@auth/express/providers/credentials'
import { config } from 'dotenv'
import { AuthController } from '../shared/AuthController'
import { RemultAdapter } from '../../../auth-adapter/src/index'
import GitHub from '@auth/express/providers/github'

config()
export const app = express()
app.set('trust proxy', true)
const dataProvider = new JsonFileDataProvider('db')
const { adapter } = RemultAdapter({ dataProvider })

const validUsers = ['Jane', 'Alex']
const authConfig: AuthConfig = {
  adapter,
  providers: [GitHub],
  callbacks: {
    session: ({ session, user }) => {
      const result = {
        ...session,
        user,
      }
      return result
    },
  },
}

app.use('/auth/*', ExpressAuth(authConfig))

export const api = remultExpress({
  controllers: [AuthController],
  entities: [],
  getUser: async (req) => {
    return (await getSession(req, authConfig))?.user as UserInfo
  },
})

app.use(api)
