var mysql = require('mysql');
var express = require('express');
const cors=require('cors');
const app = express();
var http = require('http');
var url = require('url');
var fs = require('fs');
const path = require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var port = 5000;
app.use(cors());

app.use(express.json());




// const dictionaryRouter = require('./routes/dictionary')
// app.use('', dictionaryRouter);

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "bank",
    port: 3306
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // con.query("SELECT * FROM entries", function (err, result, fields) {
    //   if (err) throw err;
    //   console.log(result);
    // });
  });

 
  app.get('/', function (req, res) {
   
   res.sendFile(path.join(__dirname, '/index.html'));

  });

app.post('/', function (req, res) {
    var name = req.body.user;
    var number = req.body.account;
    var amount = req.body.amount;
    var operation = req.body.operation;
    var deposit = 0;
    if (operation == "balance") {
        console.log(operation + " dddddddddddddddddd");
        var sql2 = "SELECT balance FROM accounts WHERE name = '" + name + "'";
      
        con.query(sql2, function (err, data, fields) {
            if (err) throw err;
            //console.log(data);
          
            res.status(200).send(data)
        });
    
    }
    if (operation == "new") {
        console.log(operation + " dddddddddddddddddd");
        var sql2 = "INSERT INTO accounts (name, number,balance) VALUES ('" + name + "', '" + number + "','" + amount + "')"; 
      
        con.query(sql2, function (err, data, fields) {
            if (err) throw err;
            //console.log(data);
          
            res.status(200).send("account entered success")
        });
    
     }
    if (operation == "deposit") {
        console.log(operation + " dddddddddddddddddd");
        var sql2 = "SELECT balance FROM accounts WHERE name = '" + name + "'";
      
        con.query(sql2, function (err, data, fields) {
            if (err) throw err;
            //console.log(data);
            var integer = parseInt(data);
            var integer2 = parseInt(amount);
            deposit = integer + integer2
            console.log(deposit);
          // res.status(200).send(data + amount)
        });
        var sql1 = "UPDATE accounts SET balance = '" + deposit + "' WHERE name = '" + name + "'";
        con.query(sql1, function (err, data, fields) {
            if (err) throw err;
            //console.log(data);
            
            res.status(200).send(data)
        });
    }
    if (operation == "withdraw") {
        console.log(operation + " dddddddddddddddddd");
        var sql2 = "SELECT balance FROM accounts WHERE name = '" + name + "'";
      
        con.query(sql2, function (err, data, fields) {
            if (err) throw err;
            //console.log(data);
            var integer = parseInt(data);
            var integer2 = parseInt(amount);
            deposit = integer - integer2
            console.log(deposit);
          //  res.status(200).send(data)
        });
        var sql1 = "UPDATE accounts SET balance = '" + deposit + "' WHERE name = '" + name + "'";
        con.query(sql1, function (err, data, fields) {
            if (err) throw err;
            //console.log(data);
            
            res.status(200).send(data)
        });
    }
   
 })
        
    
app.listen(port,()=> console.log(`runs on port ${port}`));