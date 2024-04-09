'use client'

import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignUp,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import { useToast } from '@/components/ui/use-toast'
import { useMutation, useQuery } from 'convex/react'

export default function Home() {
  const files = useQuery(api.files.getFiles)
  const createFile = useMutation(api.files.createFile)
  const { toast } = useToast()

  return (
    <main className="flex min-h-screen mx-auto justify-center items-center gap-12">
      <div className="absolute left-1/3">
        <Button
          onClick={async () => {
            try {
              await createFile({
                name: 'hello world!',
              })

              toast({
                variant: 'default',
                title: 'File was successfully uploaded!',
                description: 'Now you can manage your file in your workspace.',
              })
            } catch (err) {
              toast({
                variant: 'destructive',
                title: 'Oops, something went wrong!',
                description:
                  'Your file could not be uploaded. Please, log in into your account and try later.',
              })
            }
          }}
        >
          Insert File
        </Button>
      </div>

      <div className="flex flex-col gap-4 absolute right-1/3 max-h-screen">
        {files?.map((file) => <div key={file._id}>{file.name}</div>)}
      </div>
    </main>
  )
}
