const { Router } = require('express');
const fetch = require('node-fetch');            // Fetch is for request info from a URL
const router = Router();

// GET Users from other API
router.get('/',  async (req, res) => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await resp.json();            // Convert data to json
    res.json(users);
});

module.exports = router;