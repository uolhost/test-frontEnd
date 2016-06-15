var app         = require('connect')();
var serverStactic = require('serve-static');
var open = require('open');

app.use(serverStactic('app'));

open('http://localhost:7000');
app.listen(7000, function() {
  console.log('Listening in port 7000');
});
