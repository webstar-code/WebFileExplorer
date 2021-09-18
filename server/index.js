const express = require('express')
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'FileSystem'
})

db.connect((err) => {
    if (err) throw err;
})

// Create DB 
let CreateDB_sql = 'CREATE DATABASE IF NOT EXISTS FileSystem;';
db.query(CreateDB_sql, (err, result) => {
    if (err) throw err;
    console.log(result);
})


// INSERT INTO
let insertDB_sql = 'INSERT INTO nodes SET ?';

app.post('/insert', (req, res) => {
    let data = req.body;
    console.log(data);

    db.query(insertDB_sql, data, (err, result) => {
        if (err) throw err;
        console.log("data added");
    })
})

// UPDATE NAME
let updateDB_sql = 'UPDATE nodes SET name = ? WHERE id = ?';
app.post('/update', (req, res) => {
    let data = req.body;

    db.query(updateDB_sql, [data.name, data.id], (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log("rename succesful");
    })
})


let deleteDB_sql = 'DELETE FROM nodes WHERE id = ?'
app.post('/delete', (req, res) => {
    let data = req.body;
    console.log(data);
    db.query(deleteDB_sql, data, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log("delete successfill");
    })
})


// Retrieve Nodes
let retreiveDB_sql = 'SELECT * FROM nodes WHERE ID = ?';
app.post('/getNode', (req, res) => {
    let data = req.body;
    console.log(data);
    db.query(retreiveDB_sql, [data.ID] , (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

app.listen(5000, () => {
    console.log("Listening at 5000");
})