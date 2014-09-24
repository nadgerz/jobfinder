var expect = require("chai").expect;
var mongoose = require("mongoose");
var jobModel = require("../models/Job");


function resetJobs(callback) {
    mongoose.connect.collections['jobs'].drop(callback);
}


describe("get jobs", function() {
    it("should never be empty since jobs are seeded", function(done) {
        mongoose.connect('mongodb://localhost/jobfinder', function() {
            resetJobs(function() {
                mongoose.model('Job').find({}).exec(function(err, jobsList) {
                    expect(jobsList.length).to.be.at.least(1);
                    done();
                });
            });
        });
    });
});