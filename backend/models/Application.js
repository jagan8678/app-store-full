const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    image: String,
    name: String,
    description: String,
    releaseDate: String,
    version: String,
    ratings: String,
    genre: String,
    category: String,
    visibility: { type: Boolean, default: true },
    downloads:{ type: Number, default: 0 },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', required: true}
    
});
module.exports = mongoose.model('Application', applicationSchema);

