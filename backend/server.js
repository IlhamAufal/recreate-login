const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json())

app.use(cors());
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'ilham234',
    database:'ibos'
})

app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM users WHERE email = ? AND pw = ?';
    const values = [
        req.body.email,
        req.body.password,
    ];
    
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json("Error" );
        }
        
        if (data.length > 0) {
            return res.status(200).json("Login Successfully" );
        } else {
            return res.status(404).json("No Record" );
        }
    });
});


app.listen(5000, ()=>{
    console.log("Server is running")
})