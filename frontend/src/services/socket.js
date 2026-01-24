import { io } from "socket.io-client";
import { apislice } from "./apiSlice";
import { store } from "../store";

const socket = io("http://localhost:3000", {
  withCredentials: true,
});

/* =========================
   CONNECTION DEBUG
========================= */
socket.on("connect", () => {
  console.log("🟢 Socket connected:", socket.id);
});

socket.on("connect_error", (err) => {
  console.error("❌ Socket connection error:", err.message);
});

/* =========================
   AVAILABILITY CHANGE ONLY
========================= */
socket.on("book:availabilityChanged", (data) => {
  console.log("📡 Availability changed:", data);

  // 🔥 THIS is what actually forces refetch
  store.dispatch(
    apislice.util.invalidateTags([{ type: "BOOKS", id: "LIST" }])
  );
});

export default socket;
