var express = require('express'),
    app = express();
//server
var server = app.listen(8080, function(){
    console.log('Server is listening to port ' + server.address().port);
});
//test view
app.get('/', function(req, res){
    res.send('LIVE -- on the go!');
});