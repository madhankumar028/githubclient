var express = require('express');
var app = express();

app.use(express.static(__dirname + '/index.html'));

var server = app.listen(process.env.PORT || 80, function () {
  var port = server.address().port;
  console.log('Listening at port ' + port);
});
