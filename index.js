const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the first MongoDB database
const treksConnection = mongoose.createConnection(process.env.MONGODB_URL);

treksConnection.on('connected', () => {
    console.log("Connected to MongoDB Database 1");
});

treksConnection.on('error', (err) => {
    console.error("Failed to connect to MongoDB Database 1", err);
});

// Connect to the second MongoDB database
const formConnection = mongoose.createConnection(process.env.FORM_MONGODB_URL);

formConnection.on('connected', () => {
    console.log("Connected to MongoDB Database 2");
});

formConnection.on('error', (err) => {
    console.error("Failed to connect to MongoDB Database 2", err);
});

// Pass connections to the route files
app.use('/api/treks', require('./routes/trekRoutes')(treksConnection));
app.use('/api/contact', require('./routes/formRoutes')(formConnection));

// Start the server
app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT || 3001);
});
