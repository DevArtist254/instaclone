import React, {useState, useEffect} from "react"
import axios from "axios"
import {motion} from "framer-motion"

function ImageGrid({setSelectedImg}) {
 const [docs, setDocs] = useState([])

 useEffect(() => {
  getAllImage()
 }, [])

 async function getAllImage() {
  try {
   const res = await axios.get("/instaclone/v1/images/get-all-images")

   console.log(res.data.images)
   setDocs(res.data.images)
  } catch (error) {
   console.log(error)
  }
 }

 return (
  <div className="img-grid">
   {docs
    ? docs.map((doc) => (
       <motion.div
        className="img-wrap"
        key={doc._id}
        layout
        whileHover={{opacity: 1}}
        s
        onClick={() => setSelectedImg(doc.imageUrl)}
       >
        <motion.img
         src={doc.imageUrl}
         alt="uploaded pic"
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{delay: 1}}
        />
       </motion.div>
      ))
    : undefined}
  </div>
 )
}

export default ImageGrid
