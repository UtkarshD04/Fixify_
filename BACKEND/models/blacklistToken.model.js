const mongoose = require('mongoose');

const blacklistTokenModel = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60*60*24
    }
})

module.exports = mongoose.model('BlacklistToken', blacklistTokenModel);