const express = require("express");
const router = express.Router();

const {localFileUpload, imageUpload,videoUpload, imageSizeReducer, getImages, deleteImage} = require("../controllers/fileUpload");

//api route
router.post("/localFileUpload",localFileUpload );
router.post("/imageUpload",imageUpload );
router.post("/videoUpload",videoUpload );
router.post("/imageSizeReducer", imageSizeReducer);
router.get('/getImages',getImages)
router.delete('/deleteImage/:id',deleteImage)

module.exports = router;