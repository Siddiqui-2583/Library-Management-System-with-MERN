import book from '../models/book.js'

export const getBooks =async (req, res) => {
    try {
        const book =await book.find()

        res.status(200).json({message:error.message})
    }
    catch (error) {
        
    }
}

export const addBook = (req, res) => {
    res.send()
}