import React, {useState} from "react"
import {Link} from "react-router-dom"
import ImageGrid from "../comp/ImageGrid"
import UploadForm from "../comp/UploadForm"
import Modal from "../comp/Modal"

function Dashboard({token, errMessage}) {
 const [selectedImg, setSelectedImg] = useState(null)

 return (
  <div>
   {token ? (
    <div>
     <UploadForm />
     <ImageGrid setSelectedImg={setSelectedImg} />
     {selectedImg ? (
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
     ) : undefined}
    </div>
   ) : (
    <div>
     <h5>
      Please login in here <Link to="/Login">Have an a/c login here</Link>
     </h5>
    </div>
   )}
  </div>
 )
}

export default Dashboard
