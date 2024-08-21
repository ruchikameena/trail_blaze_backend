const express = require('express');

module.exports = (formConnection) => {
    const router = express.Router();
    const FormController = require('../controllers/formController')(formConnection);

    router.post('/', FormController.submitForm);

    return router;
};
