import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.MY_NEXT_APIKEY,
  authDomain: process.env.MY_NEXT_AUTHDOMAIN,
  projectId: process.env.MY_NEXT_PROJECTID,
  storageBucket: process.env.MY_NEXT_STORAGEBUCKET,
  messagingSenderId: process.env.MY_NEXT_MESSAGINGSENDERID,
  appId: process.env.MY_NEXT_APPID,
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const firestore = getFirestore(app)
