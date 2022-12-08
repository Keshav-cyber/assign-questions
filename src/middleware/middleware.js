const jwt = require('jsonwebtoken')

const authenticate = function (req, res, next) {
    try {
        let token = req.headers["x-api-key"];
        if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
        let decodedToken = jwt.verify(token, "assign-questions", 
        
        function(err,decodedToken){
            if(err)
            return res.status(401).send({status:false,message:"Token is NOT Valid"})

            next()
        } );
       
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

const isAdmin = function (req, res, next) {
    try {
        let token = req.headers["x-api-key"];
        if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
        let decodedToken = jwt.verify(token, "assign-questions", 
        
        function(err,decodedToken){
            if(err)
            return res.status(401).send({status:false,message:"Token is NOT Valid"})
            if(!decodedToken.isAdmin) return res.status(401).send({status:false,message:"You are not authorised"})
            next()
        } );
       
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

module.exports = { authenticate, isAdmin }