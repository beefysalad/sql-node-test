const express = require('express')

// const {connection} = require('../database/database')

// @desc - Register users
// @route - POST /api/v1/users/register
// @access - Public

const userRegister = (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error('Missing fields!')
    }
    let query = "INSERT INTO users (email,password) VALUES (?,?)"
    // connection.query(
    //     query,[email,password],
    //     (err,results,fields)=>{
    //         if(err){
    //             console.log(err)
    //         }
    //         res.status(200).json({message:'success'})
    //     }
    // )
}

// @desc - login users
// @route - POST /api/v1/users/login
// @access - Public

const userLogin = (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error('Missing fields!')
    }
    
}

module.exports = {
    userRegister,
    userLogin
}