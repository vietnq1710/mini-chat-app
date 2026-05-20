const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({

    senderId: {
        type: Number,
        required: true
    },

    receiverId: {
        type: Number,
        required: true
    },

    message: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Message", messageSchema);