const express = require("express");

const router = express.Router();

const Message = require("../models/mongo/Message");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/send", authMiddleware, async (req, res) => {

        try {

            const { receiverId, message } = req.body;

            const senderId = req.user.id;

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
    }
);

module.exports = router;