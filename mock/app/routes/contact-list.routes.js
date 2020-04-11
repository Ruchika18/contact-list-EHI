module.exports = function(app) {

    var contacts = require('./controllers/contact-list.controller.js');

    // Create a new Customer
    app.post('/api/contacts', contacts.create);

    // Retrieve all Customer
    app.get('/api/contacts', contacts.findAll);

    // Update a Customer with Id
    app.put('/api/contacts/:id', contacts.update);

    // Delete a Customer with Id
    app.delete('/api/contacts/:id', contacts.delete);
}
