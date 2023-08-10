const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

// Two arguments means we're trying to load something into it.
mongoose.model('users', userSchema);