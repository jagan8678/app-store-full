const Application = require('../models/Application');

// Get all applications
exports.getApplications = async (req, res) => {
    try {
        const query = {};

        // If the user is not an admin, filter out applications with visibility set to false
        if (req.user && req.user.role !== 'admin') {
            query.visibility = true;
        }

        // Handle additional filtering if visibility is explicitly provided in the query
        if (req.query.visibility !== undefined) {
            query.visibility = req.query.visibility === 'true'; // Convert to boolean
        }

        const applications = await Application.find(query);
        res.json(applications);
    } catch (error) {
        res.status(500).send(error);
    }
};


//Get a specific application by ID (User and Admin)
exports.getApplicationById = async (req, res) => {
    try {
        const application = await Application.findOne({ 
            _id: req.params.id, 
            $or: [
                { visibility: true }, 
                { creatorId: req.user._id } // Allow the creator to view their own apps regardless of visibility
            ]
        });

        if (!application) return res.status(404).json({ message: 'Application not found' });
        res.json(application);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get an application by name
exports.getAppByName = async (req, res) => {
    try {
        const regex = new RegExp(req.params.name, 'i');
        const query = { name: { $regex: regex } };

        // Apply visibility filter for non-admin users
        if (req.user && req.user.role !== 'admin') {
            query.visibility = true;
        }

        const apps = await Application.find(query);
        if (!apps.length) return res.status(404).json({ message: 'No apps found' });
        res.json(apps);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


// Get Applications By Category
exports.getAppsByCategory = async (req, res) => {
    try {
        const query = { category: req.params.category };

        // Apply visibility filter for non-admin users
        if (req.user && req.user.role !== 'admin') {
            query.visibility = true;
        }

        const apps = await Application.find(query);
        if (!apps.length) return res.status(404).json({ message: 'No apps found for this category' });
        res.json(apps);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
//get application by rating 
exports.getAppsByRatings = async (req, res) => {
    try {
        const query = { ratings: { $gte: req.params.ratings } };

        // Apply visibility filter for non-admin users
        if (req.user && req.user.role !== 'admin') {
            query.visibility = true;
        }

        const apps = await Application.find(query);
        if (!apps.length) return res.status(404).json({ message: 'No apps found with this rating' });
        res.json(apps);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};





// Create a new application (Admin Only)
exports.createApplication = async (req, res) => {
    try {
        const newApplication = new Application({
            ...req.body,
            user: req.user._id  // Ensure user field is set
        });

        const savedApplication = await newApplication.save();
        res.status(201).json({ message: 'Application created', savedApplication });
    } catch (error) {
        console.error('Create Application Error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


// Update an existing application by ID (Admin & owner of the application Only)
exports.updateApplication = async (req, res) => {
    try {
        const application = await Application.findById(req.params.id);

        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        // Check if the user is the owner of the application
        if (application.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized to update this application  You are not the owner of this application' });
        }
        // Proceed with the update
        const updatedApplication = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedApplication) {
            return res.status(404).json({ message: 'Application not found' });
        }

        res.json({ message: 'Application updated', updatedApplication });
    } catch (error) {
        console.error('Update Application Error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};




// Delete an application by ID (Admin & owner of the app Only)
exports.deleteApplication = async (req, res) => {
    try {
        
        const application = await Application.findById(req.params.id);

        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }

        // Check if the user is the owner of the application
        if (application.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized to delete this application  You are not a owner of this application' });
        }

        
        await Application.findByIdAndDelete(req.params.id);

        res.json({ message: 'Application deleted' });
    } catch (error) {
        console.error('Delete Application Error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};



// put an application by id for visibility
// Assuming you have a middleware that sets req.user based on authentication
exports.updateApplicationVisibility = async (req, res) => {
    try {
        
        const { visibility } = req.body;

        // Check if visibility is a boolean
        if (typeof visibility !== 'boolean') {
            return res.status(400).json({ message: 'Invalid visibility value' });
        }
        const application = await Application.findById(req.params.id);
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }

        // Check if the current user is the owner of the application
        if (application.user.toString() !== req.user.id) {
            return res.status(403).json({ message: 'You are not authorized to update the visibility of  this application' });
        }
        const updatedApplication = await Application.findByIdAndUpdate(
            req.params.id,
            { visibility: visibility },
            { new: true }
        );
        res.json({ message: 'Application visibility updated', application: updatedApplication });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};




exports.getDownloadCount = async (req, res) => {
    try {
        const applicationId = req.params.id;

        const application = await Application.findById(applicationId);

        if (!application) {
            return res.status(404).send('Application not found');
        }

        // Check if the requesting user is the one who created the application
        if (application.user.toString() !== req.user._id.toString()) {
            return res.status(403).send('Access denied: You are not the owner of this application');
        }

        // Return appId, appName, and download count
        res.json({
            appId: application._id,
            appName: application.name,
            downloads: application.downloads
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};






exports.incrementDownloadCount = async (req, res) => {
    try {
        if (req.user && req.user.role === 'admin') {
            return res.status(403).json({ message: 'Access denied for admins' });
        }

        const application = await Application.findById(req.params.id);
        if (!application) {
            return res.status(404).send('Application not found');
        }

        // Increment the download count for non-admin users
        application.downloads += 1;
        await application.save();

        // Return appId, appName, and updated download count
        res.json({
            message: 'Download count incremented',
            appId: application._id,
            appName: application.name,
            downloads: application.downloads
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};





