const express = require("express");
const { getAlluser, saveUser } = require("../controllers/user.controller");

const router = express.Router();

//=============FILE UPLOAD START=========================//
// const uploader = require("../Utilities/uploder");

// router.post("/file-upload", uploader.single("image"), fileUpload);

//=============FILE UPLOAD END=========================//

//==================================================================================================//
//=========================================Candedate routes====================================//
//===================================================================================================//
//CREATE
// router.post("/jobs/:id/apply", verifyToken, verifyUser, saveApply);
// //get a job with hiring manager info
// router.get("/jobs/:id", verifyToken, verifyUser, getAJobWithInfo);

// //==================================================================================================//
// //=========================================Hiring Manager routes====================================//
// //===================================================================================================//
// //CREATE
// router.post("/jobs", verifyToken, verifyHiringManager, saveJob);

// //UPDATE
// router.patch("/jobs/:id", verifyToken, verifyHiringManager, updateJob);

// //GET One
// router.get("/manager/jobs/:id", verifyToken, verifyUser, getAJob);

//GET ALL
router.post("/user", saveUser);
router.get("/user", getAlluser);


module.exports = router;