const express = require('express');
const app = express();
var port = process.env.PORT || 8080;
var info = {
             'ipAddress': undefined,
             'language': undefined,
             'software': undefined
            };
app.get('/', function(req, res){
    var clientHeader = req.headers;
    var cut1 = clientHeader["user-agent"].indexOf("(");
    var cut2 = clientHeader["user-agent"].indexOf(")");
    info['ipAddress'] = clientHeader["x-forwarded-for"];
    info['language'] = clientHeader["accept-language"];
    info['software'] = clientHeader["user-agent"].slice(cut1+1, cut2);
    res.send(info);
});



app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
