const express = require('express');
const http = require('http');
const { Socket } = require('socket.io');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

let connectedPeers = [];

io.on("connection", (socket) => {
    console.log("User connected to socket.io server");
    console.log(socket.id);

    connectedPeers.push(socket.id);
    console.log(connectedPeers);
    socket.on("disconnect", () => {
        console.log(`user disconnected ${socket.id}`);
        const newConnectedPeers = connectedPeers.filter((peerSocketId) => {
            return peerSocketId !== socket.id;
        });

        connectedPeers = newConnectedPeers;
        console.log(connectedPeers);
    })
})

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

// these code were for example
// app.get('/home', (req, res) => {
//     res.send("I am Home");
// });

// app.get('/hello-world', (req, res) => {
//     res.send("Hello World edited");
// });

server.listen(PORT, () => {
    console.log(`Listening on post ${PORT}`);
});

