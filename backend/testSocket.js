import {io} from "socket.io-client"

const socket = io("http://localhost:3000");
socket.on("connect", () => {
  console.log("✅ Socket connected:", socket.id);
});

socket.on("bookUpdated", (data) => {
  console.log("📚 Book updated in real time:", data);
});

socket.on("disconnect", () => {
  console.log("❌ Socket disconnected");
});