const { Router } = require('express');
const _ = require('underscore');                            // Library for additional functionals for arrays and objects
const router = Router();
const dbmovies = require('../db.json');

// GET for show all movies from db
router.get('/', (req, res) => {
    res.json(dbmovies);                                     // Show all movies from db
});

// POST to add new movie
router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body;
    if(title && director && year && rating) {               // Check if all data exist, if not return a Wrong request
        const id  = dbmovies.length + 1;                    // Like an id in a db, 'autoincrement'
        const newMovie = { id, ...req.body };               // Add all req.body, in this case all information of the movie and 
        dbmovies.push(newMovie);                            // Save data in 'db', in this case in db.json
        res.json(dbmovies);
    } else {
        res.status(500).json({ error : 'There was an error.' });
    }
});

// PUT to update a movie
router.put('/:id', (req, res) => {
    const { id } = req.params;                              // Get the id from the params
    const { title, director, year, rating } = req.body;
    if(title && director && year && rating) {               // Check if all data exist, if not return a Wrong request
        _.each(dbmovies, (dbmovie, i) => {                  // Read array of dbmovies to get a movie from each cicle with an id for each movie
            if(dbmovie.id == id) {                          // if the id of the movie is equal to the id in the request update the information in each params
                dbmovie.title = title;
                dbmovie.director = director;
                dbmovie.year = year;
                dbmovie.rating = rating;
            }
        });
        res.json(dbmovies);                                 // Show all movies after update
    } else {
        res.status(500).json({ error : "There was an error." });
    }
});

// DELETE to remove a movie
router.delete('/:id', (req, res) => {
    const { id } = req.params;                              // Get the id from the params
    _.each(dbmovies, (dbmovie, i) => {                      // Read array of dbmovies to get a movie from each cicle with an id for each movie
        if(dbmovie.id == id){                               // if the id of the movie is equal to the id in the request remove it
            dbmovies.splice(i, 1);                          // Delete the movie
        }
    });
    res.send(dbmovies);                                     // Show all movies after delete
});

module.exports = router;