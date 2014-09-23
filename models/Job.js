var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
    title:       {type:String},
    description: {type:String}
});

var Job = mongoose.model('Job', jobSchema);

