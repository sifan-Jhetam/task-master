import { db } from "../firebase";
import { getDocs, addDoc, collection, updateDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";


export function getData(email) {
  const taskRef = collection(db, email)
  return getDocs(taskRef);
}

export function createNewCollection(email) {

  const usersCollectionRef = collection(db, email)
  return addDoc(usersCollectionRef, {
    taskName: "demo task",
    discription: "remove it ",
  })

}

export function updataTask(id, newData, user) {
  const taskDocRef = doc(db, user, id)
  return setDoc(taskDocRef, newData)

}

export function DeleteTask(id, currentUser) {
  const taskDocRef = doc(db, currentUser.email, id)

  return deleteDoc(taskDocRef)

}

export function addTask(user, data) {
  let addRef = collection(db, user)
  return addDoc(addRef, data)
}