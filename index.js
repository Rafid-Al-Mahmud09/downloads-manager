var http = require('http');
var url = require('url');
//create a server object
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url);
    res.write('<br>Hello World!<br>'); //write a response to the client
    // Split the query string into readable parts:
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt); //end the response
}).listen(8080, ()=>{
    console.log('Server is running at - http://localhost:8080/?year=2017&month=July');
}); //the server object listens on port 8080

/**
 * demo_http_url.js
 * Initiate demo_querystring.js:
 * C:\Users\Your Name>node demo_querystring.js
 * The address: http://localhost:8080/?year=2017&month=July
 */