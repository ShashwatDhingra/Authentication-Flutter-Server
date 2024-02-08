console.log('JAI GURU JI');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
})