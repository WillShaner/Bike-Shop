const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000'}))

app.listen('3001', ()=> {
    console.log('running on port 3001')
} )

const db = mysql.createConnection({
    user: 'will',
    host: '127.0.0.1',
    password: 'pass',
    database: 'bike_shop',
    port: '3306',
})

app.get('/get', (req, res) => {
    db.query("SELECT * FROM bikes", (err, result) => {
        if(err){
            console.log('err', err)
        } else res.send(result)
    })
})