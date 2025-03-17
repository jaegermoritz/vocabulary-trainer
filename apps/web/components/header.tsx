import { MainNavigation } from './mainNavigation'
import { UserButton } from './userButton'

export const Header = () => {
  return (
    <header className="sticky flex justify-center border-b">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-4 sm:px-6">
        <MainNavigation />
        <UserButton />
      </div>
    </header>
  )
}
