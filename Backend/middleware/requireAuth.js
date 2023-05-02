const jwt = require('jsonwebtoken')

const User = require('../Schemas/userSchemas')

require('dotenv')

const requireAuth = async(req, res, next)=>{
    const {authentication } = req.headers

    if(!authentication){
        return res.status(401).json({error: "Authentication token required"})

    }
const token = authentication.split('')[1]

try{
const {_id} = jwt.verify(token.process.env.SECRET)

req.user = await User.findOne({_id}).select('_id')

next()
}catch{
console.log(error)
res.status(401).json({error: 'Request not authorized'})
}
}

module.exports = requireAuth