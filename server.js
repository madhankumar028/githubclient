var express    = require('express'),
    path       = require('path'),
    passport   = require('passport'),
    Github     = require('passport-github').Strategy,
    bodyParser = require('body-parser'),
    app        = express();

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(passport.initialize());

app.use(express.static(__dirname + '/client'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log('Listening at port ' + port);
});

passport.use(new Github({
  clientID: 'b7641fc061fbc7eba0ae',
  clientSecret: '582f452b977885775b36fd81d8bfe51a5d48e59d',
  callbackURL: 'http://localhost:8080/auth/callback'
}, function(accessToken, refreshToken, profile, done){
  done(null, {
    accessToken: accessToken,
    profile: profile
  });
}));

app.get('/auth', passport.authenticate('github'));
app.get('/auth/error', error);
app.get('/auth/callback',
  passport.authenticate('github', {failureRedirect: '/auth/error'}), callback);

function error(req, res) {
  res.send('Login error');
}

function callback(req, res) {
  res.send('Login Success');
}
