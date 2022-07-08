const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const dotenv = require('dotenv')
const {errorHandler} = require('./middlewares/errorMiddleware')
const {connection} = require('./database/database')
const userRoutes = require('./routes/userRoutes')
console.clear()

dotenv.config()
// connection.connect((err)=>{
//     if(err){
//         console.log('Database connection failed!', err);
//     }else{
//         console.log('Database connection successful!');
//     }
// })


app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/v1/users', userRoutes)
app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})