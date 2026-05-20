const express = require("express");

const router = express.Router();

const Message = require("../models/mongo/Message");

router.post("/send", async (req, res) => {

    try {

        const { senderId, receiverId, message } = req.body;

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });

        res.status(201).json(newMessage);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;