import "dotenv/config";

import express from "express";

import db from "./config/db.js";
import bookRouter from "./router/bookRouter.js";
import adminRouter from "./router/adminRouter.js";
import cookie from "cookie-parser";
import http from "http";
import { Server } from "socket.io";
import cors from "cors"

console.log("ENV CHECK:", {
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
});

const app = express();
db();
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
app.use(express.json());
app.use(cookie());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.set("io", io);

io.on("connection", (socket) => {
  console.log("client connected", socket.id);

  socket.on("disconnect", () => {
    console.log("client disconnected", socket.id);
  });
});
app.use("/api/books", bookRouter);
app.use("/api/admin", adminRouter);
server.listen(process.env.PORT, () => {
  console.log(`Server Running at port ${process.env.PORT}`);
});
