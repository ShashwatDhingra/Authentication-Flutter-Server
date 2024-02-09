console.log('JAI GURU JI');

const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv').config();
const db = require('./db')
const authRouter = require('./routes/auth');

app.use(express.json());
app.use('/api', authRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
})