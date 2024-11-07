import {
  initializeApp,
  type FirebaseOptions,
  getApps,
  FirebaseApp,
  getApp,
} from 'firebase/app'
import { getAuth } from 'firebase/auth'

let app: FirebaseApp

if (!getApps().length) {
  const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN as string,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APPID as string,
  }

  app = initializeApp(firebaseConfig)
} else {
  app = getApp()
}

const auth = getAuth(app)

export { app, auth }
