import NextAuth, { NextAuthConfig, NextAuthResult } from 'next-auth'
import GitHub from 'next-auth/providers/github'

const options: NextAuthConfig = {
  providers: [GitHub],
}

const nextAuth = NextAuth(options)
// need to do that coz of: https://github.com/nextauthjs/next-auth/issues/10568
export const auth: NextAuthResult['auth'] = nextAuth.auth
export const signIn: NextAuthResult['signIn'] = nextAuth.signIn
export const handlers: NextAuthResult['handlers'] = nextAuth.handlers
export const signOut: NextAuthResult['signOut'] = nextAuth.signOut
export const unstable_update: NextAuthResult['unstable_update'] = nextAuth.unstable_update
