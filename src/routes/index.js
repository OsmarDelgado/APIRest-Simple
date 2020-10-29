const { Router } = require('express');
const router = Router();

// Routes
router.get( '/', (req, res) => {
    res.json( {
        "title" : "Hello World",
    } );
} );

router.get( '/test', (req, res) => {
    const data = {
        "name" : "Osmar",
        "age" : "25",
    };
    res.json( data );
} );

module.exports = router;