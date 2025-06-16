const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    user: { type: String, required: true }, // Can be changed to ObjectId for real users later
    createdAt: { type: Date, default: Date.now }
});

const Bid = mongoose.model('Bid', bidSchema);
module.exports = Bid;
