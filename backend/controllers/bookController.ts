import Book from "../models/book";

export const getAllBooks = async (_req: any, res: any) => {
  try {
    const books = await Book.find().limit(10);
    res.send(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const addBook = async (req: { body: any; }, res: any) => {
  const bookObj = req.body;
  const book = new Book(bookObj);

  try {
    const savedBook = await book.save();
    console.log("Book saved in the database", savedBook);
    res.status(201).send(savedBook);
  } catch (error) {
    console.log(error);
    res.status(500).send("Book was not created!");
  }
};

export const getBook = async (req: { params: { id: any; }; }, res: any) => {
  const bookId = req.params.id;
  try {
    const book = await Book.findById(bookId);
    res.send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occured while getting the book!");
  }
};

export const getHint = async (req: { params: { filter: any; keyword: any; }; }, res: { send: (arg0: any[]) => void; }) => {
  const filter = req.params.filter;
  const value = req.params.keyword;

  try {
    const query:any = {};
    query[filter] = new RegExp(value, "i");

    const selectQuery = filter + " -_id";
    const booksQuery = Book.find(query).select(selectQuery);

    const books = await booksQuery.limit(10);
    const hints = books.map((b) => b.get(filter));
    res.send(hints);
  } catch (err) {
    console.log(err);
  }
};

export const editBook = async (req: { body: any; params: { id: any; }; }, res: any) => {
  const bookObj = req.body;
  const { id } = req.params;

  try {
    const condition = { _id: id };
    const update = { $set: bookObj };
    const options = { new: true };
    const updatedBook = await Book.findOneAndUpdate(condition, update, options);
    res.send(updatedBook);
  } catch (error) {
    res.status(500).send("Book was not updated!");
  }
};

export const deleteBook = async (req: { params: { id: any; }; }, res: any) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.findOneAndDelete({ _id: id });
    res.send(deletedBook);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occcured while deleting the book!");
  }
};
