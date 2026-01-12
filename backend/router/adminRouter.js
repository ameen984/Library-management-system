import express from "express"
import { createUser, login, logout } from "../controller/adminController.js"


const adminRouter=express.Router()


adminRouter.post("/create",createUser)
adminRouter.post("/login",login)
adminRouter.post("/logout",logout)

export default adminRouter