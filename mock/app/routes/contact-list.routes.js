module.exports = function(app) {

    var contacts = require('./controllers/contact-list.controller.js');

    // Create a new Contact
    app.post('/api/contacts', contacts.create);

    // Retrieve all Contact
    app.get('/api/contacts', contacts.findAll);

    // Update a Contact with Id
    app.put('/api/contacts/:id', contacts.update);

    // Delete a Contact with Id
    app.delete('/api/contacts/:id', contacts.delete);
}
