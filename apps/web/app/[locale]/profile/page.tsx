import { auth } from '@/auth'
import { SessionProvider } from 'next-auth/react'

export default async function ProfilePage() {
  const session = await auth()
  if (session?.user) {
    // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
    // filter out sensitive data before passing to client.
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
  }

  return (
    <SessionProvider basePath={'/auth'} session={session}>
      <h1>Inside Session Provider</h1>
    </SessionProvider>
  )
}
