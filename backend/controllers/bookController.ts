import * as BookService from "./bookService";

export const getAllBooks = async (_: any, res: any) => {
  try {
    const books = await BookService.getAllBooks();
    res.send(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const addBook = async (req: { body: any }, res: any) => {
  const bookObj = req.body;

  try {
    const savedBook = await BookService.createBook(bookObj);
    console.log("Book saved in the database", savedBook);
    res.status(201).send(savedBook);
  } catch (error) {
    console.log(error);
    res.status(500).send("Book was not created!");
  }
};

export const getBook = async (req: { params: { id: string } }, res: any) => {
  const bookId = req.params.id;
  try {
    const book = await BookService.getBookById(bookId);
    res.send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occured while getting the book!");
  }
};

export const getHint = async (
  req: { params: { filter: string; keyword: string } },
  res: any
) => {
  const filter = req.params.filter;
  const value = req.params.keyword;

  try {
    const hints = await BookService.getBookHints(filter, value);
    res.send(hints);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured!');
  }
};

export const editBook = async (
  req: { body: any; params: { id: string } },
  res: any
) => {
  const bookObj = req.body;
  const { id } = req.params;

  try {
    const updatedBook = await BookService.updateBook(id, bookObj);
    res.send(updatedBook);
  } catch (error) {
    res.status(500).send("Book was not updated!");
  }
};

export const deleteBook = async (req: { params: { id: string } }, res: any) => {
  const { id } = req.params;
  try {    
    const deletedBook = await BookService.deleteBook(id);
    res.send(deletedBook);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occcured while deleting the book!");
  }
};
