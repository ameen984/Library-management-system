import express from "express"
import dotenv from "dotenv"
import db from "./config/db.js"

dotenv.config()

const app=express()
db()
app.listen(process.env.PORT,()=>{console.log(`Server Running at port ${process.env.PORT}`);
})