import express from "express"
import dotenv from "dotenv"
import db from "./config/db.js"
import bookRouter from "./router/bookRouter.js"
import adminRouter from "./router/adminRouter.js"
import cookie from "cookie-parser"
dotenv.config()

const app=express()
app.use(express.json())
app.use(cookie())

app.use("/api/books",bookRouter)
app.use("/api/admin",adminRouter)
db()
app.listen(process.env.PORT,()=>{console.log(`Server Running at port ${process.env.PORT}`);
})