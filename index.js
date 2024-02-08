console.log('JAI GURU JI');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/test', (req, res)=>{
    res.json({"testing": 'pass'})
})

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
})