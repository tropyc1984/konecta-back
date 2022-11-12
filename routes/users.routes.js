const express = require('express'); 
const router = express.Router();
const User = require('../models/users.model');

router.post('/signIn', async (req, res) => {
    const { user, pass, admin} = req.body;
    const newUser = new User({user, password: pass, admin})
    try {
        const query = await newUser.save();
        res.json({ status: 'ok', user, pass});
    } catch (error) {
        res.json({ status: 'error', error: 'user exist'});
    }
})

router.post('/login', async (req, res) => {
    const { user, pass} = req.body;
    try {
        const currentUser = await User.find({user}).lean();
        if (!currentUser.length) {
            res.json({ status: 'error', error: 'Error: User does not exist'});
        } else {
            const userAdmin = currentUser[0].admin ? 'admin': 'user';
            pass === currentUser[0].password ?  res.json({ status: 'ok', user: userAdmin}) : res.json({ status: 'error', error: 'Error: Bad user pass'});
        } 
    } catch (error) {
        res.json({ status: 'error', error});
    }
    
})

module.exports = router;