var mongoose = require("mongoose");
var Promise = require("bluebird");

var jobSchema = mongoose.Schema({
    title:       {type:String},
    description: {type:String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function() {
    return new Promise( function(resolve, reject) {
        Job.find({}).exec(function(error, collection) {
            // console.log("error");
            // console.log(collection.length);
            if (collection.length === 0) {
                Job.create({title:'xxx', description: 'flibble'});
                Job.create({title:'abc', description: 'glibble'});
                Job.create({title:'123', description: 'hlibble'});
                Job.create({title:'bob', description: 'jlibble'}, resolve);
            }
        });
    });
};

