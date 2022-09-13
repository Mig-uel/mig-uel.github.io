import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore'

/* ---- Firebase config ---- */
const firebaseConfig = {
  apiKey: 'AIzaSyCt3vJQ5ZPsxFVAoAX4WVVM7eBRFNJyJC0',
  authDomain: 'portfolio-f52a9.firebaseapp.com',
  projectId: 'portfolio-f52a9',
  storageBucket: 'portfolio-f52a9.appspot.com',
  messagingSenderId: '123473992179',
  appId: '1:123473992179:web:46522aa3dfb3f3c3ba1a86',
}

/* ---- Initialize App ---- */
const app = initializeApp(firebaseConfig)

/* ---- Initialize DB ---- */
const db = getFirestore(app)

export async function getProjects() {
  const projects = []

  try {
    const query = await getDocs(collection(db, 'projects'))

    query.forEach((doc) => projects.push(doc.data()))

    return projects
  } catch (error) {
    console.log(error)
  }
}
