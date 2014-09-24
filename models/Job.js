var mongoose = require("mongoose");
var Promise = require("bluebird");

var jobSchema = mongoose.Schema({
    title:       {type:String},
    description: {type:String}
});

var jobs = [
        {title:'xxx', description: 'flibble'},
        {title:'abc', description: 'glibble'},
        {title:'123', description: 'hlibble'},
        {title:'bob', description: 'jlibble'},
    ];
    
    
var Job = mongoose.model('Job', jobSchema);

function findJobs(query) {
    return Promise.cast(mongoose.model('Job').find(query).exec());
}

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

