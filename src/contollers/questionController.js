const questionModel = require("../models/questionModel")



const  getAllQuestions = async function(req,res){
    
    try{
        let questions = await questionModel.aggregate([
            { 
                $sample: { size: 2} 
            }
          ])


    return  res.status(200).send({questions})



    }catch(error){
        res.status(500).send({ msg: error.message })
    }
      
}

const  getQuestionAnswer = async function(req,res){
    
    try{

        let id = req.params.id
        let answer = await questionModel.findById(id)


    return  res.status(200).send({answer})



    }catch(error){
        res.status(500).send({ msg: error.message })
    }
      
}



module.exports = { getAllQuestions , getQuestionAnswer}