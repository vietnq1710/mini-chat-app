const { Server } = require("socket.io");

const Message = require("../models/mongo/Message");

const onlineUsers = {};

const socketConnection = (server) => {

    const io = new Server(server, {
        cors: {
            origin: "*"
        }
    });

    io.on("connection", (socket) => {

        const userId = socket.handshake.query.userId;

        if (userId) {

            onlineUsers[userId] = socket.id;

            console.log(`User ${userId} connected`);
        }

        console.log("Online Users:", onlineUsers);

        socket.on("send_message", async (data) => {

            try {

                const newMessage = await Message.create({
                    senderId: data.senderId,
                    receiverId: data.receiverId,
                    message: data.message
                });

                const receiverSocketId =
                    onlineUsers[String(data.receiverId)];

                if (receiverSocketId) {

                    io.to(receiverSocketId).emit(
                        "receive_message",
                        newMessage
                    );
                }

                socket.emit(
                    "receive_message",
                    newMessage
                );

            } catch (error) {

                console.log(error);
            }
        });

        socket.on("disconnect", () => {

            delete onlineUsers[userId];

            console.log(`User ${userId} disconnected`);

            console.log("Online Users:", onlineUsers);
        });
    });
};

module.exports = socketConnection;