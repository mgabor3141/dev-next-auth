import { useEffect, useState } from "react";
import { remult, type UserInfo } from "remult";
import { AuthController } from "../shared/AuthController";

export function Todo() {
  const [currentUser, _setCurrentUser] = useState<UserInfo>();

  function setCurrentUser(user: UserInfo | undefined) {
    _setCurrentUser(user);
    remult.user = user;
  }
  useEffect(() => {
    AuthController.currentUser().then(setCurrentUser);
  }, []);
  return (
    <div>
      <center>
        {remult.authenticated() ? (
          <div>
            Hello, {currentUser?.name} -
            <a type="button" href="/auth/signout">
              Sign Out
            </a>
          </div>
        ) : (
          <a type="button" href="/auth/signin">
            Sign In
          </a>
        )}
      </center>
    </div>
  );
}
