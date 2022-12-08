const express = require('express');
const app = express();
const routes = require('./routes');

// Use the routes defined in the routes module
app.use('/', routes);

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});