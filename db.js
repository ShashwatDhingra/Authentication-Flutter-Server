const mongoose = require('mongoose');

const db = mongoose.createConnection(process.env.DATABASE).on('open', () => {
    console.log('Connected to MongoDB Successfully');
}).on('error', () => {
    console.log("Error while connecting to MongoDb");
})


module.exports = db;

