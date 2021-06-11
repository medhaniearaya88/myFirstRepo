var mysql = require('mysql');
const express = require('express');

const app = express();

//creat a connection
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jestinod98661",
  database: "bank"
});

db.connect(err => {
  if (err) throw err;
  db.query("SELECT * FROM accounts", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

/*
//Db create
app.get('/creatdb', (req,res) => {
    let sql = 'CREAT DATABASE myDb';
    db.query(sql,(err, result) => {
        if(err) throw err;
        res.send("Database Created...");
    });
});
*/

/* 
//create a table
app.get('/createpoststable', (req,res)=>{
    let sql = 'CREATE TABLE posts(is int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255) PRIMARY KEY(255) (id)';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('posts table created...');
    });
});
*/

app.get('/addpost1', (req,res) => {
    let post = {name :"Haward", number : 4563, balance : 10000};
    let sql = 'INSERT INTO accounts SET ?';
    let query= db.query(sql, post, (err, result) =>{
        if (err) throw err;
        console.log(result);
        res.send('data was added..')
    })
})

//Select posts
app.get('/getposts', (req,res) => {
    let sql = 'SELECT * FROM accounts';
    let query = db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        //res.write(200, 'Content-Type')
        //res.send(result);
        res.send('data was selected');
    });
});

//Select single data
app.get('/getpost/:name', (req,res) => {
    let sql = `SELECT * FROM accounts WHERE name = ${req.params.name}`;
    let query = db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        //res.write(200, 'Content-Type')
        //res.send(result);
        res.send('one data was selected');
    });
});

//Update data
app.get('/update/:name', (req,res) => {
    let newName = 'FRED';
    let sql = `UPDATE accounts SET name = ${newName} WHERE name = ${req.params.name}`;
    let query = db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        //res.write(200, 'Content-Type')
        //res.send(result);
        res.send('one data was update');
    });
});

//delete
app.get('/delete/:name', (req,res) => {
    
    let sql = `DELETE FROM accounts WHERE name = ${req.params.name}`;
    let query = db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        //res.write(200, 'Content-Type')
        //res.send(result);
        res.send('one data was DLETED');
    });
});


app.listen('8080', () => {
    console.log('Server started on post 8080');
});