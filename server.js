var fs    = require('fs'),
    http  = require('http');

http.createServer(function (request, response) {
    fs.createReadStream('${__dirname}/index.html'}.pipe(response);
}).listen(8000 || process.env.PORT);

console.log('Listening on port 8000.');

// var express = require('express');
// var app = express();
//
// app.use(express.static(__dirname + '/index.html'));
//
// var server = app.listen(process.env.port || 80, function () {
//   var port = server.address().port;
//   console.log('Listening at port ' + port);
// });
