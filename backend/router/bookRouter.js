import express from "express"
import { addBook, allBooks, fetchBook, updateBook } from "../controller/bookController.js"


const bookRouter=express.Router()

bookRouter.post("/books",addBook)
bookRouter.get("/books/:id",fetchBook)
bookRouter.get("/books/",allBooks)
bookRouter.put("/books/:id",updateBook)

export default  bookRouter