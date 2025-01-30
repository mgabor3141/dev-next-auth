import { auth, signIn } from '@/auth'
import { remult } from 'remult'
import { User } from '../../../auth-adapter/src/entities'

export async function Page() {
  const c = await remult.repo(User).count()

  const session = await auth()
  if (!session) {
    await signIn()
    return
  }

  const currentUser = session.user

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
