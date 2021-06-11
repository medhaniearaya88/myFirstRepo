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
