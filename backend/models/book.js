import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
  title: String,
  writer: String,
  category: String,
  almira: String,
  shelf: String,
  publisher: String,
  isbn: String,
  totalPage: String,
  yearOfPublication: String,
  description: String,
  price: String,
});

const book = mongoose.model('book', bookSchema)

export default book