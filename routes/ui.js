const express = require('express');
const router = express.Router();

const mockCartoons = [
    { id: 1, name: 'Tommy Pickles', show: 'Rugrats', year: 1991, description: 'The adventurous baby leader of the Rugrats.' },
    { id: 2, name: 'SpongeBob SquarePants', show: 'SpongeBob SquarePants', year: 1999, description: 'A friendly sea sponge who lives in a pineapple under the sea.' },
    { id: 3, name: 'Bugs Bunny', show: 'Looney Tunes', year: 1940, description: 'A clever rabbit known for outsmarting his enemies.' }
];

router.get('/', (req, res) => {
    res.render('index', { cartoons: mockCartoons });
});

module.exports = router;
