var http = require('http');
var url = require('url');
var fs = require('fs');
var word=require('./word.js')


http.createServer(function(req,res){
    var q=url.parse(req.url, true)
    var qdata=q.query;
    var filename = "." + q.pathname;
    console.log(q.pathname);
    console.log(word.filename);
    if (q.pathname === "/word.js")
 {
   console.log(qdata)
        word.search(req, res, qdata);
   
}
 
// else
// fs.readFile(filename, function(err, data) { if (err) {
// res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     }
// res.writeHead(200); // Content-Type not included 
// res.write(data);
// return res.end();
//   });
// }).listen(8020);
}).listen(8097);