'use client'
import { useEffect, useState } from 'react'
import { remult, type UserInfo } from 'remult'
import { AuthController } from '../shared/AuthController'

export function Page() {
  const [currentUser, _setCurrentUser] = useState<UserInfo>()

  function setCurrentUser(user: UserInfo | undefined) {
    _setCurrentUser(user)
    remult.user = user
  }
  useEffect(() => {
    AuthController.currentUser().then(setCurrentUser)
  }, [])
  if (!currentUser)
    return (
      <a type="button" href="/api/auth/signin">
        Sign In
      </a>
    )
  return (
    <div>
      <center>
        <div>
          Hello, {currentUser?.name} -
          <a type="button" href="/api/auth/signout">
            Sign Out
          </a>
        </div>
      </center>
    </div>
  )
}
