import express from "express"
import { addBook } from "../controller/bookController.js"


const bookRouter=express.Router()

bookRouter.post("/add",addBook)

export default  bookRouter