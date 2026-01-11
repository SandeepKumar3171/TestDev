const express = require('express')
const core = require('cors')
const sql = require('./db')


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

app.listen(5000, () => {
    console.log('app is listen')
})