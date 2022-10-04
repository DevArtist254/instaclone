import {useState, useEffect} from "react"
import {
 getStorage,
 ref,
 uploadBytesResumable,
 getDownloadURL,
} from "firebase/storage"

const useStorage = (file) => {
 const [progress, setProgress] = useState(0)
 const [error, setError] = useState(null)
 const [url, setUrl] = useState(null)

 useEffect(() => {
  //refs
  const storage = getStorage()
  const storageRef = ref(storage, `images/${file.name}`)
  const uploadTask = uploadBytesResumable(storageRef, file)

  uploadTask.on(
   "state_changed",
   (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

    setProgress(percentage)
   },
   (error) => {
    // Handle unsuccessful uploads
    setError(error)
   },
   () => {
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
     //await collectionRef.add({ url, createdAt });
     setUrl(downloadURL)
    })
   }
  )
 }, [file])
 return {progress, url, error}
}

export default useStorage
