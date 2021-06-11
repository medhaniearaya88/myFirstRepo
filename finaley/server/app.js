//const db_con=require('./database_con');
var express=require('express');
var path=require('path');
var database=require('./database_con');
var cors=require('cors');
var bodyparser=require('body-parser');
//const { response } = require('express');
var app=express();

var urlencodedParser=bodyparser.urlencoded({extended:false});

app.use(express.static(path.join(__dirname,'../','client')));
app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/index.html");
});

 var corsOptions={
     origin:'*',
     optionsSuccessStatus: 200
 };
 app.post("/customer",urlencodedParser,cors(corsOptions),(request,response)=>{
    let qname=request.body.name;
    let qnumber=request.body.number;
    let qbalance=request.body.balance;
    database.insertNewCustomer(qname,qnumber,qbalance,request,response);

 });
 app.post("/getCustomer",urlencodedParser,cors(corsOptions),(request,response)=>{
    let qname=request.body.name;
    let qnumber=request.body.number
    let qbalance=request.body.balance;
    database.selectCustomer(qbalance,request,response);

 });
 app.post("/delete",urlencodedParser,cors(corsOptions),(request,response)=>{
    let qname=request.body.name;
    let qnumber=request.body.number;
    let qbalance=request.body.balance;
    database.deletecustomer(qnumber,request,response);

 });
 app.post("/update",urlencodedParser,cors(corsOptions),(request,response)=>{
    let qname=request.body.name;
    let qnumber=request.body.number;
    let qbalance=request.body.balance;
    database.updateBalance(qbalance,qnumber,request,response);

 });
app.listen(5000,()=>{
    console.log('server is running');
});