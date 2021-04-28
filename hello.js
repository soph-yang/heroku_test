var http = require('http');
var port = process.env.PORT || 3000;
// var port = 8080; //localhost


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<input type="text"></input>!');
    res.write('Sophia Yang currently lives in Medford<br>');
    res.end();
}).listen(port);