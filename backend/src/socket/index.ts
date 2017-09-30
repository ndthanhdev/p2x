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
        const ic = <string>(<any>socket).decoded_token.ic;
        await KioskModel.findOneAndUpdate(<IKiosk>{ IC: ic }, { $set: { IsOnline: true } }).exec();
        // TODO publish kiosk directly
        pubsub.publish(EVENT_KIOSK_CHANGED, ic);
        socket.join(ic);
        socket.on("disconnect", async () => {
            await KioskModel.findOneAndUpdate(<IKiosk>{ IC: ic }, { $set: { IsOnline: false } }).exec();
            pubsub.publish(EVENT_KIOSK_CHANGED, ic);
        });
        socket.on("status", async (arg: any) => {
            const status = <IStatus>JSON.parse(arg);
            status.KioskIC = ic;
            const model = await StatusModel.create(status);
            pubsub.publish(EVENT_STATUS_ADDED, model);
        });
    });

    return io;
}

export { openSafe } from "./openSafe";