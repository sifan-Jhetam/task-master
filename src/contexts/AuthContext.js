import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword ,signOut, sendPasswordResetEmail, updateEmail,updatePassword} from "firebase/auth"

const AuthContext = React.createContext()
const user=auth.currentUser;

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth,email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth,email, password)
  }

  function logout() {
    return signOut(auth)
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth,email)
  }

  function updateEmail_1(email) {
    return updateEmail(auth.currentUser,email)
  }

  function updatePassword_1(password) {
    return updatePassword(auth.currentUser,password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail_1,
    updatePassword_1
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
