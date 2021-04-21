module.exports = (app) => {
    const cat = require('../controllers/cat.controller.js');

    // Get the number of all cats in the database
    app.get('/cat/count', cat.count)

    // Create a new Cat
    app.post('/cat', cat.create);

    // Retrieve all Cats
    app.get('/cat', cat.getPaginated);

    // Retrieve a single Cat with catId
    app.get('/cat/:catId', cat.findOne);

    // Update a Cat with catId
    app.put('/cat/:catId', cat.update);

    // Delete a Cat with catId
    app.delete('/cat/:catId', cat.delete);

    // Get some statistics of all cats in the database
    app.get('/stats', cat.stats)


}