//const db_con=require('./database_con');
var express = require('express');
var path = require('path');
var database = require('./database_con');
var cors = require('cors');
var bodyparser = require('body-parser');
//const { response } = require('express');
var app = express();

var urlencodedParser = bodyparser.urlencoded({ extended: false });

app.use(express.static(path.join(__dirname, '../', 'client')));
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.post("/", urlencodedParser, cors(corsOptions), (request, response) => {
    let userName = request.body.user;
    let accountNumber = request.body.account;
    let amount = request.body.amount;
    let operation = request.body.operation;

    switch (operation) {
        case "deposit":
            database.depositMoney(accountNumber, amount, request, response);
            break;
        case "withdraw":
            database.withdrawMoney(accountNumber, amount, request, response);
            break;
        case "balance":
            database.getCurrentBalance(accountNumber, request, response);
            break;
        default:
            //for new
            database.createNewAccount(userName, accountNumber, amount, request, response);
            break;
    }



});

app.listen(5000, () => {
    console.log('server is running');
});