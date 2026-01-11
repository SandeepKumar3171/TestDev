const express = require('express')
const core = require('cors')
const sql = require('./db')
const port = 5000;


const app = express()

app.use(core())

app.get('/', (req, res) => {
    query = 'Select * from users'
    sql.query(query, (err, result) => {
        if (!err) {
            res.send(result)
        }
    })
})

app.listen(port, () => {
    console.log('app is listening on port', port)
})