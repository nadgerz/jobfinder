var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
    title:       {type:String},
    description: {type:String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function() {
    Job.find({}.exec(function(err, collection){
        if (collection.length === 0) {
            Job.create({title:'xxx', description: 'flibble'});
            Job.create({title:'abc', description: 'glibble'});
            Job.create({title:'123', description: 'hlibble'});
            Job.create({title:'bob', description: 'ilibble'});
        };
    }));
}

