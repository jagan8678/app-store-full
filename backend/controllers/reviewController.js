const Review = require('../models/Review');
const Application = require('../models/Application');

// Add a review (Users only, not admins)
exports.addReview = async (req, res) => {
    const { applicationId, comment, rating } = req.body;

    try {
        // Check if the user is an admin
        if (req.user.role === 'admin') {
            return res.status(403).json({ message: 'Admins are not allowed to add reviews' });
        }

        // Create and save the review
        const review = new Review({
            userId: req.user._id,
            applicationId,
            comment,
            rating
        });

        await review.save();
        res.status(201).json({ message: 'Review added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding review', error });
    }
};
//get reviews (admin & who created the app)
exports.getReviews = async (req, res) => {
    try {
        const applicationId = req.params.applicationId;
        const application = await Application.findById(applicationId).populate('user');
        
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }

        // Check if the logged-in user is the admin who created the application
        if (req.user.role === 'admin' && req.user._id.equals(application.user._id)) {
            const reviews = await Review.find({ applicationId }).populate('userId', 'username');
            return res.json(reviews);
        } else {
            return res.status(403).json({ message: 'Not authorized to view these reviews' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};







// exports.getReviews = async (req, res) => {
//     try {
//         let reviews;
//         const appId = req.params.appId;

//         // Check if user is an admin
//         if (req.user.role === 'admin') {
//             if (appId) {
//                 console.log("Admin fetching reviews for specific app");  
//                 reviews = await Review.find({ applicationId: appId }).populate('userId', 'username');
//             } else {
//                 reviews = await Review.find().populate('userId', 'username');
//             }
//         } else {
//             // Regular user: Fetch reviews for a specific application ID only
//             if (!appId) {
//                 return res.status(400).json({ message: 'Application ID is required' });
//             }
//             reviews = await Review.find({ applicationId: appId }).populate('userId', 'username');
//         }

//         res.json(reviews);
//     } catch (error) {
//         res.status(500).json({ message: 'Error retrieving reviews', error });
//     }
// };
