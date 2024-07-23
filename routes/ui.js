const express = require('express');
const router = express.Router();
const dal = require('../dal');

router.get('/', async (req, res) => {
    try {
        const cartoons = await dal.getCartoons();
        res.render('index', { cartoons });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
