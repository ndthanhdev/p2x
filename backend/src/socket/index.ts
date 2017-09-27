import * as socketio from "socket.io";
import * as socketiojwt from "socketio-jwt";
import { pubsub, EVENT_STATUS_ADDED, EVENT_KIOSK_CHANGED } from "../graphql/pubsub";
import { Server } from "http";
import { StatusModel, IStatus } from "../models/Status";
import { KioskModel, IKiosk } from "../models/Kiosk";

export function listen(server: Server) {

    const io = socketio(server);

    // use middleware
    io.use(socketiojwt.authorize({
        secret: process.env.JWT_SECRET,
        handshake: true
    }));

    io.on("connection", async (socket) => {
        const iCNo = <string>(<any>socket).decoded_token.ICNo;
        await KioskModel.findOneAndUpdate(<IKiosk>{ ICNo: iCNo }, { $set: { IsOnline: true } }).exec();
        pubsub.publish(EVENT_KIOSK_CHANGED, iCNo);
        socket.join(iCNo);
        socket.on("disconnect", async () => {
            await KioskModel.findOneAndUpdate(<IKiosk>{ ICNo: iCNo }, { $set: { IsOnline: false } }).exec();
            pubsub.publish(EVENT_KIOSK_CHANGED, iCNo);
        });
        socket.on("status", async (arg: any) => {
            const status = <IStatus>JSON.parse(arg);
            status.ICNo = iCNo;
            const model = await StatusModel.create(status);
            pubsub.publish(EVENT_STATUS_ADDED, model);
        });
    });

    return io;
}