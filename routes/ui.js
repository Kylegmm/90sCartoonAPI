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

router.get('/cartoons/new', (req, res) => {
    res.render('new');
});

router.get('/cartoons/:id/edit', async (req, res) => {
    try {
        const cartoons = await dal.getCartoons();
        const cartoon = cartoons.find(c => c.id == req.params.id);
        res.render('edit', { cartoon });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/cartoons/:id', async (req, res) => {
    try {
        const cartoons = await dal.getCartoons();
        const cartoon = cartoons.find(c => c.id == req.params.id);
        res.render('show', { cartoon });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
