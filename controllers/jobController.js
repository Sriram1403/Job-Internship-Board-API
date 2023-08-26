const Job = require('../models/jobModel');


exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find(); 
    res.status(200).json(jobs);   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.createJob = async (req, res) => {
  try {
    const { title, company, industry, location, jobType, applicationDeadline, description } = req.body;

    const newJob = new Job({
      title,
      company,
      industry,
      location,
      jobType,
      applicationDeadline,
      description,
    });

    await newJob.save();

    res.status(201).json({ message: 'Job created successfully', job: newJob });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};