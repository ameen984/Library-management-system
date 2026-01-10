import bookModel from "../models/bookSchema.js"


export const  addBook=async (req,res) => {

  try {
     const{title,author,category,totalCopies,description}=req.body

    const addedBook=await bookModel.create({
        title,author,category,totalCopies, availableCopies: totalCopies,description
   } )
 
    return res.status(201).json({
        message:"Book Added Successfully",
        success:true,
        result:addedBook
    })
        
    } catch (error) {
        
    return res.status(500).json({
        message:"Book Adding Failed",
        success:false,
        result:error.message
    })
    }

}