import NextAuth from 'next-auth'

import GitHub from 'next-auth/providers/github'
import { JsonFileDataProvider } from 'remult/server'
import { RemultAdapter } from '../auth-adapter'
const dataProvider = new JsonFileDataProvider('db')
const { adapter } = RemultAdapter({ dataProvider })

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter,
  providers: [GitHub],
  callbacks: {
    session: ({ session, user }) => {
      return { ...session, user }
    },
  },
})
