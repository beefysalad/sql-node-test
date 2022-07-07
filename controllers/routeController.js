const db = require('../database/database')

// @desc TEST ROUTES

const routeControl = (req,res)=>{
    const {username,password} = req.body
    if(!username || !password){
        res.status(400)
        throw new Error('Missing field!')
    }
    res.status(200).json({user:username,pass:password})
}

module.exports = {
    routeControl

}