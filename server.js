var express = require("express");
var mongoose= require("mongoose");

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res) {
    res.send('test');
});

app.get('*', function(req, res) {
    res.render('index');
});

mongoose.connect('mongodb://localhost/jobfinder');

var conn = mongoose.connection;

conn.once('open', function() {
    console.log('connected to mongo successfully');
});

// we need to do the following rather than just a port number because
// we are not on localhost but on c9
app.listen(process.env.PORT, process.env.IP);

