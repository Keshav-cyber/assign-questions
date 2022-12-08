const questionModel = require("../models/questionModel")
const jwt = require("jsonwebtoken")
const loginAdmin = async function(req,res){
    try{

        let { email , password } = req.body

        let ADMIN_Email = "keshav@admin.com"
        let ADMIN_password = "keshavpatidar"
       
        if( !(email === ADMIN_Email) || !(password === ADMIN_password)){
            return res.status(401).send({status :false , msg :"email or password is not correct"})
        }
        let token = jwt.sign(
            {
                isAdmin : true,
            },
            "assign-questions"
        );
        

        return  res.status(200).send({token})
 
     }catch(error){
         res.status(500).send({ msg: error.message })
     }
}

const createQuestion =  async function(req,res){
    
    try{

       let question  = await questionModel.create(req.body)


       return  res.status(200).send({question})

    }catch(error){
        res.status(500).send({ msg: error.message })
    }
      
}


const getQuestions = async function(req,res){
    
    try{

       let questions  = await questionModel.find()


       return  res.status(200).send({questions})

    }catch(error){
        res.status(500).send({ msg: error.message })
    }
      
}

const updateQuestion = async function(req,res){
    
    try{

       let id = req.params.id
       let updatedQuestion  = await questionModel.findByIdAndUpdate({_id:id}, {$set : req.body},{new:true})
       
       return  res.status(200).send({updatedQuestion})

    }catch(error){
        res.status(500).send({ msg: error.message })
    }
      
}

module.exports = { getQuestions, updateQuestion , loginAdmin , createQuestion}