const express = require('express');
const { applyScholarship, getUserApplications } = require('../controllers/scholarshipController');
const authenticateJWT = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/apply', authenticateJWT, applyScholarship);
router.get('/applications', authenticateJWT, getUserApplications);

module.exports = router;
