var express = require('express');
var app = express()

app.use(express.static(__dirname+"/public"));
var port = 3000;
app.listen(port, function(){
  console.log('Example app listening at port %s', port);
});
module.exports = app;