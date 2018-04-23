const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    "gender": {
        type: String,
        required: false
    },
    "color": String,
    "price": {
        type: Number,
        required: false
    },
    "description": String,
    "photo1": String,
    "photo2": String,
    "photo3": String,
    "photo4": String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: false
    }
});

module.exports = mongoose.model("Listings", listingSchema);