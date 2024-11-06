import {
  initializeApp,
  type FirebaseOptions,
  getApps,
  FirebaseApp,
} from 'firebase/app'

export let app: FirebaseApp

if (!getApps().length) {
  const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.API_KEY as string,
    authDomain: process.env.AUTH_DOMAIN as string,
    projectId: process.env.PROJECT_ID as string,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APPID as string,
  }

  app = initializeApp(firebaseConfig)
} else {
  app = getApps()[0]
}
