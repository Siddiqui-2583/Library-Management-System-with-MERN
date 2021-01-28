import express from 'express'
import {getBooks,addBook} from '../controllers/bookController.js'


const router = express.Router()

router.get('/view-books', getBooks)
router.post('/add-new-book',addBook)
router.get('/axios',(req,res)=>{res.json('Hello axios!')})
export default router