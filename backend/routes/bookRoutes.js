import express from 'express'
import {
  getBooks,
  addNewBook,
  postAllBook,
  findDetails
} from "../controllers/bookController.js";


const router = express.Router();

router.get("/books", getBooks);
router.get("/books/:filer/:keyword",findDetails)
router.post("/add-new-book", addNewBook);
router.post("/postAllBook", postAllBook);
router.get('/axios',(req,res)=>{res.json('Hello axios!')})
export default router