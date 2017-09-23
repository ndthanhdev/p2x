import * as socketio from "socket.io";
import * as socketiojwt from "socketio-jwt";
import { Server } from "http";
import { StatusModel, IStatus } from "./models/Status";
import { KioskModel } from "./models/Kiosk";

export function listen(server: Server) {

    const io = socketio(server);

    // use middleware
    io.use(socketiojwt.authorize({
        secret: process.env.JWT_SECRET,
        handshake: true
    }));

    io.on("connection", (socket) => {
        const iCNo = <string>(<any>socket).decoded_token.ICNo;
        // KioskModel.findOneAndUpdate()
        socket.join(iCNo);
        socket.on("status", async (arg: any) => {
            const status = <IStatus>JSON.parse(arg);
            status.ICNo = iCNo;
            await StatusModel.create(status);
        });
    });

    return io;
}