var http=require('http');
var url=require('url');
var fs=require('fs');
var simplecalcmod=require('./simplecalcmod.js');

http.createServer(function (req,res) {

    var q=url.parse(req.url,true);
    var filename="."+q.pathname;
    var qdata=q.query;
    if (q.pathname=='/add.js'){

        if(qdata.calculate=='add'){
            simplecalcmod.add(req,res,q.query);
        }
        else if(qdata.calculate=='subtract'){
            simplecalcmod.subtract(req,res,q.query);
        }
        else if(qdata.calculate=='multiply'){
            simplecalcmod.multiply(req,res,q.query);
        }
        else{
            simplecalcmod.division(req,res,q.query);
        }

    }else fs.readFile(filename,function(err,data){
        if (err){
            res.writeHead(404,{'Content_Type':'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200);
        res.write(data);
        return res.end();
    });
    
}).listen(8080);