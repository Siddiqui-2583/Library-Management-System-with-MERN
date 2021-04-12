import express from 'express'
import {
  getAllBooks,
  addBook,
  postAllBook,
  getBook,
  getHint,
  getSearchResults,
  editBook,
  deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.get("/books", getAllBooks);
router.post("/add-new-book", addBook);
router.get("/books/:id", getBook);
router.get("/books/hints/:filter/:keyword", getHint);
router.get("/books/searchResult/:filter/:keyword", getSearchResults);
router.put("/books/edit/:id", editBook);
router.delete("/books/delete/:id", deleteBook);

export default router

