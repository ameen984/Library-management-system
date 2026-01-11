import bookModel from "../models/bookSchema.js";

export const addBook = async (req, res) => {
  try {
    const { title, author, category, totalCopies, description } = req.body;

    const addedBook = await bookModel.create({
      title,
      author,
      category,
      totalCopies,
      availableCopies: totalCopies,
      description,
    });

    return res.status(201).json({
      message: "Book Added Successfully",
      success: true,
      result: addedBook,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Book Adding Failed",
      success: false,
      result: error.message,
    });
  }
};

export const allBooks = async (req, res) => {
  try {
    const book = await bookModel.find();

    return res.status(201).json({
      message: "all Book founded Successfully",
      success: true,
      result: book,
    });
  } catch (error) {
    return res.status(500).json({
      message: "all Book search Failed",
      success: false,
      result: error.message,
    });
  }
};
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, category, totalCopies, description } = req.body;

  const existingBook=await bookModel.findById(id)

  if(!existingBook){
    return res.status(404).json({
        message:"book not found",
        success:false
    })
  }
  let availableCopies=existingBook.availableCopies

  if(totalCopies !== undefined){
    const issuedCopies= existingBook.totalCopies-existingBook.availableCopies

    if(totalCopies<issuedCopies){
        return res.status(400).json({

            message:"total copies cannot be less than already issued copies",
            success:false
        })
    }
    availableCopies=totalCopies-issuedCopies
  }

    const updatedbook = await bookModel.findByIdAndUpdate(
      id,
      { title, author, category, totalCopies,availableCopies, description },
      { new: true }
    );

    return res.status(200).json({
      message: "Book updated Successfully",
      success: true,
      result: updatedbook,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Book updation Failed",
      success: false,
      result: error.message,
    });
  }
};
export const fetchBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await bookModel.findById(id);

    return res.status(201).json({
      message: "Book founded Successfully",
      success: true,
      result: book,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Book search Failed",
      success: false,
      result: error.message,
    });
  }
};
