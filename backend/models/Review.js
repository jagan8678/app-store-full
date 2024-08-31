const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    applicationId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Application', 
        required: true 
    },
    comment: String,
    rating: String 
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);

