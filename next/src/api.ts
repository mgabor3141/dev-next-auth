import { remultNextApp } from 'remult/remult-next'
import { AuthController } from './shared/AuthController'
import {} from 'next-auth'
import { auth } from './auth'
import type { UserInfo } from 'remult'

export const api = remultNextApp({
  entities: [],
  controllers: [AuthController],
  getUser: async () => {
    const session = await auth()
    return session?.user as UserInfo
  },
})
