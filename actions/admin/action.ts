'use server'

// TODO: ADD ZOD

import { adminDB, adminAuth, admin } from '@/firebase/admin'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// types
import { Project, Tag } from '@/types'

export const action = async (formData: FormData) => {
  try {
    // extract the ID token
    const idToken = formData.get('idToken') as string

    if (!idToken) throw new Error('ID token is missing')

    // verify ID token
    const verifiedToken = await adminAuth.verifyIdToken(idToken)
    const userId = verifiedToken.uid

    // Check if the UID matches the specific allowed UID
    if (userId !== (process.env.ADMIN_UID as string))
      throw new Error('You do not have permission to write this data')

    const project: Project = {
      demoUrl: formData.get('demoUrl') as string,
      description: formData.get('description') as string,
      githubUrl: formData.get('githubUrl') as string,
      imageUrl: formData.get('imageUrl') as string,
      tags: formData.getAll('tags') as Tag[],
      title: formData.get('title') as string,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    }

    // add project to firebase
    await adminDB.collection('projects').add(project)
  } catch (error) {
    console.log(error)
    return
  }

  revalidatePath('/projects')
  return redirect('/projects')
}
