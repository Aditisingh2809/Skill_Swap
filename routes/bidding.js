const express = require('express');
const Bid = require('../models/bid'); // ✅ Import Bid model

const router = express.Router();

// ✅ Store a new bid in MongoDB
router.post('/bids', async (req, res) => {
    try {
        const { amount, user } = req.body;

        // Basic validation
        if (!amount || !user) {
            return res.status(400).json({ message: "❌ Amount and user are required!" });
        }

        const newBid = new Bid({ amount, user });
        await newBid.save();

        res.status(201).json({ message: "✅ Bid placed successfully!", bid: newBid });
    } catch (err) {
        res.status(500).json({ message: "❌ Server error placing bid", error: err.message });
    }
});

module.exports = router;

