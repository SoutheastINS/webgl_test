var express = require('express'),
    app = express(),	
    app_port = process.env.VCAP_APP_PORT || 3000;
	
app.use(express.static(__dirname + '/public'));

app.get('/env', function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});

  res.write("System Environment:\n\n");
  for(var env in process.env) {
    res.write(env + ": " + process.env[env] + "\n")
  }

  res.end();
});

var server = app.listen(app_port, function(req, res){
  console.log('Listening on port %d', server.address().port);
});
