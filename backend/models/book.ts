import {model, Schema, Model, Document} from 'mongoose'

interface IBook extends Document {
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
};

const BookSchema: Schema = new Schema({
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

const Book: Model<IBook> = model('book', BookSchema)

export default Book