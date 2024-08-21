const mongoose = require('mongoose'); // Make sure mongoose is imported

module.exports = (treksConnection) => {
    const TrekModel = treksConnection.model('Trek', require('../models/treks').schema);

    return {
        // Controller method to fetch all treks
        getAllTreks: async (req, res) => {
            try {
                const treks = await TrekModel.find();
                res.json(treks);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: "Server error" });
            }
        },

        // Controller method to fetch a trek by ID
        getTrekById: async (req, res) => {
            try {
                const trekId = req.params.trekId;

                // Check if the trekId is a valid ObjectId
                if (!mongoose.Types.ObjectId.isValid(trekId)) {
                    return res.status(400).json({ message: 'Invalid trek ID format' });
                }

                // Fetch the trek by ID
                const trek = await TrekModel.findById(trekId);

                // Handle case when the trek is not found
                if (!trek) {
                    return res.status(404).json({ message: 'Trek not found' });
                }

                // Return the found trek
                res.json(trek);
            } catch (error) {
                console.error('Error fetching trek details:', error);
                res.status(500).json({ message: 'Server error' });
            }
        }
    };
};
