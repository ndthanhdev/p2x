import { io } from "../server";

export const openSafe = (ic: string, no: number) => io.to(ic).emit("Open Lock", no);
