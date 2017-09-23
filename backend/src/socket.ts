import * as socketio from "socket.io";
import * as socketiojwt from "socketio-jwt";
import { Server } from "http";

export function listen(server: Server) {

    const io = socketio(server);

    // use middleware
    io.use(socketiojwt.authorize({
        secret: process.env.JWT_SECRET,
        handshake: true
    }));

    io.on("connection", (socket: any) => {
        console.log(socket.decoded_token.ICNo);
    });

    return io;
}