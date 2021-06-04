exports.add = function (req,res,vals) {

    var result = 0;
    var resulttext="";
    if(vals.operation === "+"){

        var sum = parseInt(vals.first) + parseInt(vals.second);
        result = sum;
        resulttext = " The sum is";}
    else if(vals.operation === "*"){

        var product = parseInt(vals.first) *parseInt(vals.second);
        result = product;
        resulttext = " The product is ";
    }
    else if(vals.operation === "/"){

        var product = parseInt(vals.first) / parseInt(vals.second);
        result = product;
        resulttext = " The result is ";
    }
    else if(vals.operation === "-"){

        var difference = parseInt(vals.first) - parseInt(vals.second);
        result = difference;
        resulttext = "The dfference is";
    }
    
     res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>"); 
    res.write("<title>Calculator Web Site</title>");
     res.write("</head>");
    res.write("<body>");
    res.write("<p>"+resulttext +": ");
    res.write(String(result));
    res.write("</p>");
    res.write("<a href='http://127.0.0.1:5500/server2.html'>home</a>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
    };