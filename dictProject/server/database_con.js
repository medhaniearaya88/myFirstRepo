
const mysql= require('mysql');

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'entries',
   // port:'3306'
});

connection.connect((err)=>{
    if(err){
        throw err;
    } else{
        console.log('database is connected');
    }
    
});

exports.lookDefinition=function(value,request,response){
    //sanitization
    let inval=mysql.escape(value);
    //let inval='tree'
    //console.log(`the value passed is ${inval}`);
    let sqlstr= "SELECT * FROM entries WHERE word="+inval;
   connection.query(sqlstr, function (err,result){
            if(err) throw err  
            response.json(result);
    });
    
 }
