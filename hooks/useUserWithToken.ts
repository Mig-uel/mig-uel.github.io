import { auth } from '@/firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useState } from 'react'

export function useUserWithToken() {
  const [user, loading, error] = useAuthState(auth)
  const [idToken, setIdToken] = useState<string | null>(null)

  useEffect(() => {
    async function fetchToken() {
      if (user) {
        const token = await user.getIdToken()
        setIdToken(token)
      }
    }
    fetchToken()
  }, [user])

  return { user, idToken, loading, error }
}
