const mysql = require('mysql2')

const connection = mysql.createConnection({
    // host: 'localhost',
    // user: 'root',
    // password: '03235251jP!',
    // database: 'nodeapp',
    host: "localhost",
    user: 'patrick',
    password: '03235251jP',
    database: 'nodeapplication',
})

module.exports = {
    connection,
}
