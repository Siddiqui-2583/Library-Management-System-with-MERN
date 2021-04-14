import { IBook, Book } from "../models/book";

export const getAllBooks = async function (): Promise<IBook[]> {
  return await Book.find().limit(10);
};

export const getBookById = async function (bookId: any): Promise<IBook | null> {
  return await Book.findById(bookId);
};

export const getBookHints = async function (
  filter: string,
  value: string
): Promise<string[]> {
  const query: any = {};
  query[filter] = new RegExp(value, "i");

  const selectQuery = filter + " -_id";
  const booksQuery = Book.find(query).select(selectQuery);

  const books = await booksQuery.limit(10);
  return books.map((b) => b.get(filter));
};

export const createBook = async function (bookObj: any): Promise<IBook> {
  const book = new Book(bookObj);
  return await book.save();
};

export const updateBook = async function (
  id: string,
  bookObj: any
): Promise<IBook | null> {
  const condition = { _id: id };
  const update = { $set: bookObj };
  const options = { new: true };
  return await Book.findOneAndUpdate(condition, update, options);
};

export const deleteBook = async function (id: string): Promise<IBook | null> {
  return await Book.findOneAndDelete({ _id: id });
};
