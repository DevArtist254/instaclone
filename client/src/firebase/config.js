import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration

const firebaseConfig = {
 apiKey: "AIzaSyBcCcbYjEeV-TuZxoiPUL_yDbScBrezFOQ",
 authDomain: "instaclone-79c37.firebaseapp.com",
 projectId: "instaclone-79c37",
 storageBucket: "instaclone-79c37.appspot.com",
 messagingSenderId: "487535498711",
 appId: "1:487535498711:web:3b45e004a01c08202aa792",
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)
