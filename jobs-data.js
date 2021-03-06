var mongoose = require('mongoose');
var Promise = require('bluebird');
var jobModel = require('./models/Job');

// var jobSchema = mongoose.Schema({
//     title:       {type:String},
//     description: {type:String}
// });

var Job = mongoose.model('Job', jobModel.jobSchema);
//var Job = mongoose.model('Job');

var findJobs = function (query) {
    return Promise.cast(Job.find(query).exec());
};

exports.findJobs = findJobs;


exports.connectDB = Promise.promisify(mongoose.connect, mongoose);


var createJob = Promise.promisify(Job.create, Job);

exports.seedJobs = function() {
    return findJobs({}).then(function(collection) {
        if (collection.length === 0) {
            return Promise.map(jobs, function(job) {
                return createJob(job);
            });
        }
    });
};

var jobs = [
        {title:'xxx', description: 'flibble'},
        {title:'abc', description: 'glibble'},
        {title:'123', description: 'hlibble'},
        {title:'bob', description: 'jlibble'},
    ];
    