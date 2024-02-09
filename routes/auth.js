const express = require('express');

const Router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')

const User = require('../models/user')

Router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });


        if (existingUser) {
            return res.status(400).json({ 'message': 'User with same email already exists' });
        }

        const hashedPassword = await bcryptjs.hash(password, 7);

        let user = new User({
            name,
            email,
            password: hashedPassword
        });

        user = await user.save();

        res.json(user);

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
})

Router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ 'message': 'User doesnt exists with this email. Please consider signup' });
        }

        const isPassCorrect = await bcryptjs.compare(password, existingUser.password);

        if (!isPassCorrect) {
            return res.status(400).json({
                message: 'Password doesnt match'
            });
        }

        const token = jwt.sign({ id: existingUser._id }, 'jwtKey');

        res.json({token, ...existingUser._doc});

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
})

module.exports = Router;