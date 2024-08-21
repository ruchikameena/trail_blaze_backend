const express = require('express');

module.exports = (treksConnection) => {
    const router = express.Router();
    const TrekController = require('../controllers/trekController')(treksConnection);

    // Route to get all treks
    router.get('/', TrekController.getAllTreks);

    // Route to get a trek by ID
    router.get('/:trekId', TrekController.getTrekById);

    return router;
};
