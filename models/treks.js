const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    user: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
});

const TrekSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, required: true },
    highlights: { type: [String], required: true },
    image: { type: String, required: true },
    bestFor: { type: [String], required: true },
    description: { type: String, required: true },
    best_month_to_visit: { type: String, required: true },
    googleMapLink: { type: String, required: true },
    additionalImages: { type: [String], required: true },
    reviews: [ReviewSchema]
}, { collection: 'treks_data' });

module.exports = {
    schema: TrekSchema
};
