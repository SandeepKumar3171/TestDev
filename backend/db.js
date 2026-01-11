const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sandeep123',
    database: 'mydb'
})

db.connect((err) => {
    if (err) {
        console.log('Db not connected')
    }
    else {
        console.log('Db connected successfully')
    }
})

module.exports = db;