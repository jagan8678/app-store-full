const express = require('express');
const {
    getApplications,
    getApplicationById,
    createApplication,
    updateApplication,
    deleteApplication,
    getAppByName,
    getAppsByCategory,
    getAppsByRatings,
    updateApplicationVisibility,
    getDownloadCount,
    incrementDownloadCount,
} = require('../controllers/applicationController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();


// Routes for both user and admin
router.get('/', protect, getApplications);
router.get('/:id', protect, getApplicationById);
router.get('/name/:name', protect, getAppByName);
router.get('/category/:category', protect, getAppsByCategory);
router.get('/ratings/:ratings', protect, getAppsByRatings);
router.put('/increment-download/:id', protect, incrementDownloadCount);

// Routes for only admin
router.post('/', protect, admin, createApplication);
router.put('/:id', protect, admin, updateApplication);
router.delete('/:id', protect, admin, deleteApplication);
router.put('/:id/visibility', protect, admin, updateApplicationVisibility);
router.get('/download-count/:id', protect, admin, getDownloadCount); 




module.exports = router;

