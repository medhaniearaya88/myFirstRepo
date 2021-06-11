exports.search =function(req, res ,vals){
//req manupulate
// return res
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "entries"
});

con.connect(function(err) {
  if (err) throw err;
  con.query(`SELECT definition FROM entries.entries  where word = '${vals.wordSearch}'`, function (err, result, fields) {
  //con.query("SELECT definition  FROM entries.entries where word = 'boy'", function (err, result, fields) {
    if (err) throw err;
//    console.log(fields.values.toString);

//console.log(result);



//for(let i=0 ;i<array.length)


   res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>"); 
    res.write("<title> WAP Online Dictionary </title>");
     res.write("</head>");
    res.write("<body>");
   // res.write("<p>"+resulttext +": ");
  // result.
   //var string=JSON.stringify(result);
  //  var string=JSON.parse(result);
  //  // res.write(String(string));
  //   res.write(string[0].definition);
  var arr = result;
    
for (var i = 0; i < arr.length; i++){
  res.write("<br><br>definition : " + (i+1));
  var obj = arr[i];
  for (var key in obj){
    var value = obj[key];
    res.write("<br> - "+ ": " + value);
  }
}
    
    res.write("</p>");
   //res.write("<a href='http://http://127.0.0.1:5500/project/dict.html'>home</a>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
   

  });
});


}