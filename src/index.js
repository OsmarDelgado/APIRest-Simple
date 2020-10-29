// Requires
const express = require('express');
const morgan = require('morgan');

// Const requires
const app = express();

// Settings
app.set( 'port', process.env.PORT || 3000 );            // Set port number to the server, if exist a defined port take that if not put port in 3000
app.set( 'json spaces', 2 );                            // Set json spaces for better view

// Middlewares
app.use( morgan('dev') );                               // Show in terminal the response of server
app.use( express.urlencoded({ extended: false }) );     // For support simple data (texts in forms)
app.use( express.json() );                              // For parse incoming requests with json

// Routes                                               // Routes separated in different files for better management
app.use(require('./routes/index'));                     // Index routes
app.use('/api/movies', require('./routes/movies'));     // Movies routes
app.use('/api/users', require('./routes/users'));        // Users routes

// Starting server
app.listen( app.get('port'), () => {
    console.log(`Server on port ${ app.get('port') }`);
} );