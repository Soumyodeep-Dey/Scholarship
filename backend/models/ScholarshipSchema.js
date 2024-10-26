const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'pending' },
  course: String,
  institute: String,
  scholarshipAmount: Number,
  appliedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Scholarship', scholarshipSchema);
