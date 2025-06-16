require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const biddingRoutes = require('./routes/bidding'); // ✅ Bidding routes only (no authentication)

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Ensure body parsing middleware is before routes

// 🔹 Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`🔹 Incoming Request: ${req.method} ${req.url}`);
    next();
});

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => {
        console.error("❌ MongoDB Connection Error:", err.message);
        process.exit(1);
    });

// ✅ Register bidding routes (No authentication required)
app.use('/api', biddingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
