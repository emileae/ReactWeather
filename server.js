var express = require('express');

// create the app
var app = express();
const PORT = process.env.PORT || 3000;// heroku give us the port or the 300 port if not specified

// redirect if on https
app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'http'){
    next();
  }else{
    res.redirect('http://' + req.hostname + req.url);
  };
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
