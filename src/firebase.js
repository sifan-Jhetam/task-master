// import firebase from "firebase"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import "firebase/auth"

const app =initializeApp({
  apiKey: "AIzaSyC_LRyR4l2MOk_hyhKCMe3lILBy3yp1fLc",
  authDomain: "task-manager-dev1.firebaseapp.com",
  projectId: "task-manager-dev1",
  storageBucket: "task-manager-dev1.appspot.com",
  messagingSenderId: "87486177086",
  appId: "1:87486177086:web:1dd6d9f34daecd4d87166f"
})

export const auth = getAuth(app)
export default app
export const db=getFirestore(app)