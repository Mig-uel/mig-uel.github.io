'use client'

import { auth } from '@/firebase/config'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import { signOut } from 'firebase/auth'

import { Button } from '@/components/ui/button'
import { BarLoader } from 'react-spinners'

const AuthPage = () => {
  const router = useRouter()

  const [user, loading] = useAuthState(auth)

  const [signInWithGoogle] = useSignInWithGoogle(auth)

  const handleSignUp = async () => {
    try {
      await signInWithGoogle()

      return router.push('/admin')
    } catch (error) {
      console.log(error)
    }
  }

  if (loading)
    return (
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <BarLoader />
      </div>
    )

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
