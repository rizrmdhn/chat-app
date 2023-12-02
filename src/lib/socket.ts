import { io } from "socket.io-client";

const urls = process.env.NEXT_PUBLIC_SOCKET_URLS || "http://localhost:3000";
const socketIO = io(urls);

export default socketIO;
