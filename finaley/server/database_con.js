var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"bank",
});

con.connect((err)=>{
    if(err) throw err;
    console.log('database connected');
});

//select 
exports.selectCustomer=(value,request,response)=>{
    let inval=mysql.escape(value);
    console.log(inval);
    let sqlstr='SELECT * FROM accounts WHERE balance='+inval;
    con.query(sqlstr, function (err,result){
        if(err) throw err  
        console.log(result);
        response.json(result);
       
    });
}

//inserting to the database 

exports.insertNewCustomer=(qname,qnumber,qbalance,request,response)=>{
    let inval1=mysql.escape(qname);
    var inval2=mysql.escape(qnumber);
    //console.log(typeof inval2);
    var inval3=mysql.escape(qbalance);
    let sqlstr='INSERT INTO accounts (name, number,balance) VALUES ('+inval1+','+inval2+','+inval3+')';
   console.log(sqlstr);
    // var values=[inval1,inval2,inval3];
    con.query(sqlstr,(err,result)=>{
        if(err) throw err;
        console.log('inserted');

    });
}
//insertNewCustomer();
//deleting the value
exports.deletecustomer=(value,request,response)=>{

    let inval=mysql.escape(value);
    let sqlstr="DELETE FROM accounts WHERE number="+inval;

    con.query(sqlstr,(err,result)=>{
        if(err) throw err;
        console.log('deleted');
    });
}

//deletecustomer();
//updating values
exports.updateBalance=(value,number,request,response)=>{
    let inval1=mysql.escape(value);  //balance
    let inval2=mysql.escape(number);   //acc number
    let sqlstr="UPDATE accounts SET balance ="+inval1+" WHERE number="+inval2;
    con.query(sqlstr,(err,result)=>{
        if(err) throw err;
        console.log(result.affectedRows+' balance updated');
    })
}
//updateCustomer();