import { io } from "socket.io-client";
import { works } from "../store";

const socket = io(`ws://${location.hostname}`);

socket.on("connect", () => {
  console.log("socket ", socket.connected); // true
});

socket.on("workStatusUpdate", (e) => {
  works.fetch();
  works.fetchCurrentWork();
});
