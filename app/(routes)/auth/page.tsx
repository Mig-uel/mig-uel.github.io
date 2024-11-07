'use client'

import { auth } from '@/firebase/config'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { signOut } from 'firebase/auth'

const AuthPage = () => {
  const router = useRouter()

  const [user] = useAuthState(auth)

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
      {!user ? (
        <Button type='button' onClick={handleSignUp}>
          Login with Google
        </Button>
      ) : (
        <Button type='button' onClick={() => signOut(auth)}>
          Logout
        </Button>
      )}
    </div>
  )
}

export default AuthPage
