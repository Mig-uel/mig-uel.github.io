'use server'

import { adminDB, adminAuth } from '@/firebase/admin'
import { db, addProject } from '@/firebase/db'
import { getAuth } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { redirect } from 'next/navigation'

export const action = async (formData: FormData) => {
  try {
    // extract the ID token
    const idToken = formData.get('idToken') as string

    if (!idToken) throw new Error('ID token is missing')

    // verify the id token
    const auth = getAuth()
    const decodedToken = await adminAuth.verifyIdToken(idToken)
    const userId = decodedToken.uid

    console.log(userId)

    // Check if the UID matches the specific allowed UID
    // if (userId !== 'ItuPaPE3swdWAjqciHN9PWSKpYZ2') {
    //   throw new Error('You do not have permission to write this data')
    // }

    const project: Project = {
      demoUrl: formData.get('demoUrl') as string,
      description: formData.get('description') as string,
      githubUrl: formData.get('githubUrl') as string,
      imageUrl: formData.get('imageUrl') as string,
      tags: formData.getAll('tags') as Tag[],
      title: formData.get('title') as string,
      userId,
    }

    await addDoc(collection(db, 'projects'), project)

    return redirect('/projects')
  } catch (error) {
    console.log(error)
  }
}
