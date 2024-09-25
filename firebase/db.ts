import {
  FirebaseServerAppSettings,
  initializeApp,
  initializeServerApp,
  type FirebaseOptions,
} from 'firebase/app'

import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.API_KEY as string,
  authDomain: process.env.AUTH_DOMAIN as string,
  projectId: process.env.PROJECT_ID as string,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APPID as string,
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const getProjects = async () => {
  const projects = collection(db, 'projects')

  const projectsSnapshot = await getDocs(projects)

  const projectsList = projectsSnapshot.docs.map((doc) => doc.data())

  return projectsList
}
