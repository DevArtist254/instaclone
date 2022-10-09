import {authTypes} from "./auth.types"
import {auth} from "../../firebase/config"
import {
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 getAuth,
 onAuthStateChanged,
} from "firebase/auth"

export const loadAuth = () => ({
 type: authTypes.LOADING_AUTH,
})

export const successStateAuth = (user) => ({
 type: authTypes.SUCCESS_AUTH,
 payload: user,
})

export const failStateAuth = (errMessage) => ({
 type: authTypes.FAIL_AUTH,
 payload: errMessage,
})

export const setSignup = (email, password) => {
 return async (dispatch) => {
  try {
   loadAuth()
   const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
   )

   dispatch(successStateAuth(userCredential.user.accessToken))
  } catch (error) {
   dispatch(failStateAuth(error.message))
  }
 }
}

export const setLogin = (email, password) => {
 return async (dispatch) => {
  try {
   loadAuth()
   const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
   )
   dispatch(successStateAuth(userCredential.user))
  } catch (error) {
   dispatch(failStateAuth(error.message))
  }
 }
}

export const getCurrentUser = () => {
 return async (dispatch) => {
  try {
   loadAuth()
   const auth = getAuth()
   await onAuthStateChanged(auth, (user) => {
    if (user) {
     dispatch(successStateAuth(user))
    }
   })
  } catch (error) {
   dispatch(failStateAuth(error.message))
  }
 }
}
