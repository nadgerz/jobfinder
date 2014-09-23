var express = require("express");
var mongoose= require("mongoose");
var jobModel = require("./models/Job");

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res) {
    mongoose.model('Job').find({})
                         .exec(function(err, collection) {
                             res.send(collection);
                         });
});

app.get('*', function(req, res) {
    res.render('index');
});

//mongoose.connect('mongodb://localhost/jobfinder');
mongoose.connect('mongodb://dms:nrg@ds039850.mongolab.com:39850/jobfinder');


var conn = mongoose.connection;

conn.once('open', function() {
    console.log('connected to mongo successfully');
    jobModel.seedJobs();
});

// we need to do the following rather than just a port number because
// we are not on localhost but on c9
app.listen(process.env.PORT, process.env.IP);

