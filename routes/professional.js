const express = require('express');

const router =  express.Router();

// Import controller
const professionalController = require('../controllers/professional');

// GET /professional
router.get('/', professionalController.getProfessionalInfo);

module.exports = router;
