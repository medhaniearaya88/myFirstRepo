var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "bank",
});

con.connect((err) => {
    if (err) throw err;
    console.log('database connected');
});

//get current balance by account number  
exports.getCurrentBalance = (accountNumber, request, response) => {
    let inval = mysql.escape(accountNumber);
    // console.log(inval);
    let sqlstr = 'SELECT * FROM accounts WHERE number=' + inval;
    con.query(sqlstr, function(err, result) {
        if (err) throw err
        console.log(result);
        response.json(result);

    });
}

//creating new account

exports.createNewAccount = (userName, accountNumber, amount, request, response) => {
    let inval1 = mysql.escape(userName);
    var inval2 = mysql.escape(accountNumber);
    var inval3 = mysql.escape(amount);
    let sqlstr = 'INSERT INTO accounts (name, number,balance) VALUES (' + inval1 + ',' + inval2 + ',' + inval3 + ')';
    console.log(sqlstr);
    con.query(sqlstr, (err, result) => {
        if (err) throw err;
        console.log('inserted');
    });
}

//withdraw money
exports.withdrawMoney = (accountNumber, amount, request, response) => {
    let inval1 = mysql.escape(value); //balance
    let inval2 = mysql.escape(number); //acc number
    let sqlstr = "UPDATE accounts SET balance =" + inval1 + " WHERE number=" + inval2;
    con.query(sqlstr, (err, result) => {
        if (err) throw err;
        console.log(result.affectedRows + ' balance updated');
    })
}

//deposit money
exports.depositMoney = (accountNumber, amount, request, response) => {
    let inval1 = mysql.escape(accountNumber); //balance
    let inval2 = mysql.escape(amount); //acc number
    let sqlstr = "UPDATE accounts SET balance =" + inval1 + " WHERE number=" + inval2;
    con.query(sqlstr, (err, result) => {
        if (err) throw err;
        console.log(result.affectedRows + ' balance updated');
    })
}