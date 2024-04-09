import { Button } from '@/components/ui/button'
import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  return (
    <div className="relative z-10 border-b py-4 bg-stone-200">
      <div className="items-center container justify-end gap-2 flex">
        <UserButton />
        <SignedOut>
          <SignInButton>
            <Button className="bg-blue-600">Sign In</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  )
}

export default Header
