import express from 'express'
import {
  getBooks,
  addBook,
  postAllBook,
} from "../controllers/bookController.js";


const router = express.Router();

router.get("/books", getBooks);
router.post('/add-new-book', addBook)
router.post("/postAllBook", postAllBook);
router.get('/axios',(req,res)=>{res.json('Hello axios!')})
export default router