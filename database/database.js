
const mysql = require('mysql2')
require('dotenv').config()


//pool allows us to do asynchroneous connections to the database 
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

//sql variable is a query string (select/read) that we use to query the database
let sql = "SELECT * FROM users"

//query is a function that takes in a query string and a callback function
pool.execute(sql,function(err,result){
    if(err){
        console.log(err)
    }
    const data = result.map(row=>row.email)
    console.log(data)    
})
module.exports = pool.promise()

// const connection = mysql.createConnection({
//     // host: 'localhost',
//     // user: 'root',
//     // password: '03235251jP!',
//     // database: 'nodeapp',
//     // host: "localhost",
//     // user: 'root',
//     // password: '03235251jP',
//     // database: 'nodeapp',
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
// })

// module.exports = {
//     connection,
// }
