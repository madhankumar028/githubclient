var fs    = require('fs'),
    http  = require('http');

http.createServer(function (request, response) {
    fs.createReadStream('${__dirname}/index.html'}.pipe(response);
}).listen(8000 || process.env.port);

console.log('Listening on port 8000.');
