import { app } from './config'

import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
} from 'firebase/firestore'

export const db = getFirestore(app)

export const getProjects = async () => {
  const projects = collection(db, 'projects')

  const projectsSnapshot = await getDocs(projects)

  const projectsList = projectsSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    }
  })

  return projectsList
}

export const getProjectById = async (id: string) => {
  const docRef = doc(db, 'projects', id)

  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) return docSnap.data()
  else return null
}

export const addProject = async (project: Project) => {
  const docRef = await addDoc(collection(db, 'projects'), project)

  console.log(docRef.id)
}
