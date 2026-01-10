import express from "express"
import dotenv from "dotenv"
import db from "./config/db.js"
import bookRouter from "./router/bookRouter.js"

dotenv.config()

const app=express()
app.use(express.json())
app.use("/api",bookRouter)
db()
app.listen(process.env.PORT,()=>{console.log(`Server Running at port ${process.env.PORT}`);
})