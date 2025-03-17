import { auth } from 'auth'
import { SignIn, SignOut } from './authComponents'

export const UserButton = async () => {
  const session = await auth()
  if (!session?.user) return <SignIn />
  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-sm sm:inline-flex">{session.user.email}</span>
      <span className="hidden text-sm sm:inline-flex">{session.user.name}</span>

      <SignOut />
    </div>
  )
}
