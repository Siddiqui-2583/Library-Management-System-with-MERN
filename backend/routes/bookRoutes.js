import express from 'express'
import {
  getAllBooks,
  addBook,
  postAllBook,
  getBook,
  getHint,
  editBook,
  deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.get("/books", getAllBooks);
router.post("/add-new-book", addBook);
router.get("/books/:id", getBook);
router.get("/books/:filter/:keyword", getHint)
router.put("/books/edit/:id", editBook);
router.delete("/books/delete/:id", deleteBook);

export default router

