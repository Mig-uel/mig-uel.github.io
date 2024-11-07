'use client'

import { auth } from '@/firebase/config'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { BarLoader } from 'react-spinners'
import { useEffect } from 'react'

const AuthPage = () => {
  const [user, loading] = useAuthState(auth)
  const [signInWithGoogle] = useSignInWithGoogle(auth)
  const router = useRouter()

  const handleSignUp = async () => {
    try {
      await signInWithGoogle()

      router.push('/admin')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user) router.push('/admin')
  }, [user, router])

  if (loading || user)
    return (
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <BarLoader />
      </div>
    )

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <Button type='button' onClick={handleSignUp}>
        Login with Google
      </Button>
    </div>
  )
}

export default AuthPage
