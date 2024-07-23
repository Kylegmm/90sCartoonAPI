const express = require('express');
const router = express.Router();
const dal = require('../dal');

router.get('/cartoons', async (req, res) => {
    try {
        const cartoons = await dal.getCartoons();
        res.json(cartoons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/cartoons', async (req, res) => {
    try {
        await dal.addCartoon(req.body);
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/cartoons/:id', async (req, res) => {
    try {
        const updatedCartoon = await dal.updateCartoon(req.params.id, req.body);
        res.json(updatedCartoon);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.patch('/cartoons/:id', async (req, res) => {
    try {
        const updatedCartoon = await dal.updateCartoon(req.params.id, req.body);
        res.json(updatedCartoon);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/cartoons/:id', async (req, res) => {
    try {
        await dal.deleteCartoon(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
