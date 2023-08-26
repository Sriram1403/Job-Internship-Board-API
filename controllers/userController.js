const User = require('../models/userModel');
const Job = require('../models/jobModel');

exports.getUser = async (req, res) => {
  try {
    const userId = req.params.id; 
    const user = await User.findById(userId); 

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.saveJob = async (req, res) => {
  try {
    const userId = req.params.id; 
    const jobId = req.body.jobId;

    const user = await User.findById(userId);
    const job = await Job.findById(jobId);

    if (!user || !job) {
      return res.status(404).json({ message: 'User or job not found' });
    }

    if (!user.savedJobs.includes(jobId)) {
      user.savedJobs.push(jobId);
      await user.save();
      res.status(200).json({ message: 'Job saved successfully' });
    } else {
      res.status(400).json({ message: 'Job already saved' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};






