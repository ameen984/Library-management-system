import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import bookRouter from "./router/bookRouter.js";
import adminRouter from "./router/adminRouter.js";
import cookie from "cookie-parser";
import http from "http";
import { Server } from "socket.io";
dotenv.config();

const app = express();
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
db();
server.listen(process.env.PORT, () => {
  console.log(`Server Running at port ${process.env.PORT}`);
});
