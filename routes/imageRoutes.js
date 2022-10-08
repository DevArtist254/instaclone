const express = require("express")
const Image = require("../model/imageModel")

const router = express.Router()

router.get("/get-all-images", async (req, res) => {
 try {
  let images = await Image.find()

  res.status(200).json({
   message: "success",
   images,
  })
 } catch (error) {
  res.status(500).json({
   message: `Internal Server Error ${error.message}`,
  })
 }
})

router.post("/post-an-image", async (req, res) => {
 try {
  const image = await Image.create({
   name: req.body.name,
   imageUrl: req.body.url,
  })

  res.status(200).json({
   message: "success",
   image,
  })
 } catch (error) {
  res.status(500).json({
   message: `Internal Server Error ${error.message}`,
  })
 }
})

module.exports = router
