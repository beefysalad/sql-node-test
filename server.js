const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const routes = require('./routes/route')
const dotenv = require('dotenv').config()
console.clear()





app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/test', routes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})