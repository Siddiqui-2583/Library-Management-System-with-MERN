import express from 'express'
import {
  getBooks,
  addNewBook,
  postAllBook,
} from "../controllers/bookController.js";


const router = express.Router();

router.get("/books", getBooks);
router.post("/add-new-book", addNewBook);
router.post("/postAllBook", postAllBook);
router.get('/axios',(req,res)=>{res.json('Hello axios!')})
export default router