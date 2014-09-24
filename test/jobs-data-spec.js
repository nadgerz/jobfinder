var expect = require("chai").expect;

mongoose.connect('mongodb://localhost/jobfinder');

describe("get jobs", function() {
    it("should never be empty since jobs are seeded", function() {
        mongoose.model('Job').find({}).exec(function(err, jobsList) {
            expect(jobsList.length).to.be.at.least(1);
            });
    });
});