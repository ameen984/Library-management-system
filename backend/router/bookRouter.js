import express from "express"
import { addBook, allBooks, deleteBook, fetchBook, issueBook, returnBook, updateBook } from "../controller/bookController.js"


const bookRouter=express.Router()

bookRouter.post("/",addBook)
bookRouter.get("/:id",fetchBook)
bookRouter.get("/",allBooks)
bookRouter.put("/:id",updateBook)
bookRouter.delete("/:id",deleteBook)
bookRouter.post("/:id/issue",issueBook)
bookRouter.post("/:id/return",returnBook)

export default  bookRouter