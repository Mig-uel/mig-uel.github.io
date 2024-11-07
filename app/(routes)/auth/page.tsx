'use client'

import { auth } from '@/firebase/config'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const AuthPage = () => {
  const router = useRouter()
  const [signInWithGoogle] = useSignInWithGoogle(auth)

  const handleSignUp = async () => {
    try {
      await signInWithGoogle()

      return router.push('/admin')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <Button onClick={handleSignUp} variant='destructive'>
        Login with Google
      </Button>
    </div>
  )
}

export default AuthPage
