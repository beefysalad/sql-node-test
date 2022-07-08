const db = require('../database/database')
const {connection} = require('../database/database')
// @desc TEST ROUTES

const routeControl = (req,res)=>{
    const {email,password} = req.body
    console.log(process.env.DB_PASS)
    if(!email || !password){
        res.status(400)
        throw new Error('Missing field!')
    }
    let query = "INSERT INTO users (email,password) VALUES (?,?)"
    connection.query(
        query,[email,password],
        // "INSERT INTO users (email, password) VALUES ('jacq@gmail','5767')",
        (err,results,fields)=>{
            if(err){
                console.log(err)
            }
            res.status(200).json({message:'Success'})
            console.log(results)
        }
    )
    
}
const routeSelect = (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error('Missing field!')
    }
    let query = "SELECT * FORM users where email (?)"
    connection.query(
        query,[email],
        (err,results,fields)=>{
            if(err){
                console.log(err)
            }
            res.status(200).json({message:'Success'})
            console.log(results)
        }
    )
}

module.exports = {
    routeControl,
    routeSelect
}