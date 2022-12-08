const express = require('express')
const router = express.Router()
const { authenticate , isAdmin } = require("../middleware/middleware")
const { getAllQuestions , getQuestionAnswer} = require('../contollers/questionController')
const { registerUser, loginUser } = require('../contollers/userController')
const { getQuestions, updateQuestion,loginAdmin,createQuestion} = require("../contollers/adminController")

//user 
router.post("/register", registerUser)    
router.post("/login",loginUser) 
router.get("/question",authenticate,getAllQuestions)
router.get("/question/:id",authenticate,getQuestionAnswer)


//admin 
router.post("/admin/login",loginAdmin)
router.post("/admin/question",isAdmin,createQuestion)
router.get("/admin/questions", isAdmin, getQuestions)
router.put("/admin/question/:id",isAdmin, updateQuestion)




module.exports = router