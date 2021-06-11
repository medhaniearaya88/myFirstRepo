var http=require('http');
var url=require('url');
var fs=require('fs');
var dictmod=require('./dict.js');

http.createServer(function(req,res){
  var q=url.parse(req.url,true);
  var filename='.'+q.pathname;
  var qdata=q.query;  
if(q.pathname=='/dict.js'){
    dictmod.search=function(req,res,qdata);

}
})