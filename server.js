var express = require("express");

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.render('index');
});

// we need to do the following rather than just a port number because
// we are not on localhost but on c9
app.listen(process.env.PORT, process.env.IP);

