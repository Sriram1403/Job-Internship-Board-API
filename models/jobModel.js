const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  industry: String,
  location: String,
  jobType: String,
  applicationDeadline: Date,
  description: String,
  
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
