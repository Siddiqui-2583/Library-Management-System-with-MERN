import { IBook, Book } from "../models/book";
import { IBookRequest, IBookResponse } from "../dto/bookResponse";
import { escapeRegExp } from "../utils/stringUtil";

export const getAllBooks = async function (
  bookRequest: IBookRequest
): Promise<IBookResponse> {
  let query: any = {};
  if (bookRequest.filter) {
    var escapedKeyword = escapeRegExp(bookRequest.keyword);
    query[bookRequest.filter] = new RegExp(escapedKeyword, "i");
  }

  let bookQuery = Book.find(query);
  const pageNumber = bookRequest.pageNumber || 0;
  const pageSize = bookRequest.pageSize || 10;
  const offset = pageNumber * pageSize;
  const books = await bookQuery.skip(offset).limit(+pageSize);
  const totalBooks = await Book.find(query).countDocuments();
  const bookResponse: IBookResponse = {
    books: books,
    totalBookCount: totalBooks,
    pageNumber: pageNumber,
    booksPerPage: pageSize,
  };

  return bookResponse;
};

export const getBookById = async function (bookId: any): Promise<IBook | null> {
  return await Book.findById(bookId);
};

export const getBookHints = async function (
  filter: string,
  value: string
): Promise<string[]> {
  const query: any = {};
  var escapedvalue = escapeRegExp(value);
  query[filter] = new RegExp(escapedvalue, "i");

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
