const db = require('../db')
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (email) => {
                const regEx =
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    return email.match(regEx);
            },
            message: 'Please enter a valid email address'
        }
    },
    password: {
        type: String,
        required: true,

    }
})

const userModel = db.model('users', userSchema);

module.exports = userModel;