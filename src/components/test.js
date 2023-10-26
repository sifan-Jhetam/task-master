
import React from "react"
import { db } from "../firebase"
import { collection, doc, getDoc, getDocs, setDoc ,getFirestore, query, addDoc} from "firebase/firestore"

export function Test() {

  
    const taskRef = collection(db,"sifan@gmail.com",)
    let getTask = async () => {
        let data = await getDocs(taskRef);
        const dd=data.docs.map((doc)=>({
            ...doc.data(),
            id:doc.id,
        }))
        console.log(dd)
}

// let createUser= async ()=>{
    
//         const collectionId = "uu11@gmail.com";
//         const documentId = "my-document";
//         const value = { versionUsed: "V9" }; 
//         setDoc(doc(db, collectionId,""), value); 
// }

const createUser = async () => {
    const usersCollectionRef = collection(db, 'ddd@gmail.com')
    const document = await addDoc(usersCollectionRef, {
      taskName: "stack over" ,
      discription: "new addedd",
    })
}
return (
    <>
        <button onClick={() => getTask()}>click</button>
        <button onClick={()=>createUser()}>create</button>
    </>
)
}