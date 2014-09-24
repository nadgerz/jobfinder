var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
    title:       {type:String},
    description: {type:String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function(callback) {
    Job.find({}).exec(function(err, collection){
        if (collection.length === 4) {
            Job.create({title:'xxx', description: 'flibble'});
            Job.create({title:'abc', description: 'glibble'});
            Job.create({title:'123', description: 'hlibble'});
            Job.create({title:'bob', description: 'jlibble'}, callback);
        };
    });
}

