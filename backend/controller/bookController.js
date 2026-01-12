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

    const existingBook = await bookModel.findById(id);

    if (!existingBook) {
      return res.status(404).json({
        message: "book not found",
        success: false,
      });
    }
    let availableCopies = existingBook.availableCopies;

    if (totalCopies !== undefined) {
      const issuedCopies =
        existingBook.totalCopies - existingBook.availableCopies;

      if (totalCopies < issuedCopies) {
        return res.status(400).json({
          message: "total copies cannot be less than already issued copies",
          success: false,
        });
      }
      availableCopies = totalCopies - issuedCopies;
    }

    const updatedbook = await bookModel.findByIdAndUpdate(
      id,
      { title, author, category, totalCopies, availableCopies, description },
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

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await bookModel.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Book deletion failed",
      error: error.message,
    });
  }
};

import mongoose from "mongoose";

export const returnBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await bookModel.findOneAndUpdate(
      {
        _id: id,
        $expr: { $lt: ["$availableCopies", "$totalCopies"] },
      },

      { $inc: { availableCopies: 1 } },
      { new: true }
    );

    if (!book) {
      return res.status(400).json({
        success: false,
        message: "Book not found or already fully returned",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Book returned successfully",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Book return failed",
      error: error.message,
    });
  }
};

export const issueBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await bookModel.findOneAndUpdate(
      { _id: id, availableCopies: { $gt: 0 } },
      { $inc: { availableCopies: -1 } },
      { new: true }
    );

    if (!book) {
      return res.status(400).json({
        success: false,
        message: "Book not available or not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Book issued successfully",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Book issue failed",
      error: error.message,
    });
  }
};
