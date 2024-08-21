const mongoose = require('mongoose');

const ContactFormSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    interest: { type: String, required: true },
    purpose: { type: String, required: true },
    callback: { type: [String], required: false },
    source: { type: [String], required: false },
    description: { type: String, default: '' }
}, { collection: 'Contactform_data' });

module.exports = {
    schema: ContactFormSchema
};
