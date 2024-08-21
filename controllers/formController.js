module.exports = (formConnection) => {
    const FormModel = formConnection.model('ContactForm', require('../models/contactFormModel').schema);

    return {
        submitForm: async (req, res) => {
            try {
                const formData = new FormModel(req.body);
                await formData.save();

                res.status(200).json({ message: 'Form data saved successfully!' });
            } catch (error) {
                console.error('Error saving form data:', error);
                res.status(500).json({ error: 'Failed to save form data' });
            }
        }
    };
};
