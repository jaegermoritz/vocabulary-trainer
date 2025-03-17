import NextAuth, { NextAuthConfig, NextAuthResult, User } from 'next-auth'
import { Provider } from 'next-auth/providers'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'

// Define the providers you want to use:
const providers: Provider[] = [GitHub]

// Use the password provider in development and test for AUTOMATIC TESTING ONLY!
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  providers.push(
    Credentials({
      id: 'password',
      name: 'Password',
      credentials: {
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        let user: User | null = null
        if (credentials.password === process.env.TEST_PASSWORD) {
          user = {
            email: 'bob@alice.com',
            name: 'Bob Alice',
            image: 'https://avatars.githubusercontent.com/u/67470890?s=200&v=4',
          }
        }
        return (await Promise.resolve(user)) ?? null
      },
    })
  )
}

const options: NextAuthConfig = {
  providers,
}

const nextAuth = NextAuth(options)
// need to do that coz of: https://github.com/nextauthjs/next-auth/issues/10568
export const auth: NextAuthResult['auth'] = nextAuth.auth
export const signIn: NextAuthResult['signIn'] = nextAuth.signIn
export const handlers: NextAuthResult['handlers'] = nextAuth.handlers
export const signOut: NextAuthResult['signOut'] = nextAuth.signOut
export const unstable_update: NextAuthResult['unstable_update'] = nextAuth.unstable_update
