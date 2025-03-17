import { signIn, signOut } from 'auth'
import { JSX, ClassAttributes, ButtonHTMLAttributes } from 'react'

export const SignIn = ({ provider, ...props }: { provider?: string }) => {
  return (
    <form
      action={async () => {
        'use server'
        await signIn(provider)
      }}>
      <button {...props}>Sign In</button>
    </form>
  )
}

export const SignOut = (
  props: JSX.IntrinsicAttributes & ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
      className="w-full">
      <button {...props}>Sign Out</button>
    </form>
  )
}
