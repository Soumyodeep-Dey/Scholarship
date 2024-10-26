const Scholarship = require('../models/ScholarshipSchema');

exports.applyScholarship = async (req, res) => {
  const { course, institute, scholarshipAmount } = req.body;
  try {
    const application = new Scholarship({
      applicant: req.userId,
      course,
      institute,
      scholarshipAmount,
    });
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error applying for scholarship' });
  }
};

exports.getUserApplications = async (req, res) => {
  try {
    const applications = await Scholarship.find({ applicant: req.userId });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching applications' });
  }
};
