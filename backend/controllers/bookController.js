import Book from '../models/book.js'

export const addNewBook = (req, res) => {
  let {
    title,
    writer,
    category,
    almira,
    shelf,
    publisher,

    isbn,

    totalPage,
    yearOfPublication,
    description,
    price,
  } = req.body;
  let book = new Book({
    title,
    writer,
    category,
    almira,
    shelf,
    publisher,

    isbn,

    totalPage,
    yearOfPublication,
    description,
    price,
  });
  console.log(book);

  book
    .save()
    .then((b) => {
      console.log("Book posted to mongo", b);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error Occurred",
      });
    });
};
export const getBooks =async (req, res) => {
    try {
        const book = await Book.find()
            .then((data) => res.send(data))
            .catch((err) => console.log(err.message))

        res.status(200).json({message:error.message})
    }
    catch (error) {
        
    }
}
export const postAllBook = (req, res) => {
  const allBooks = req.body;

  allBooks.forEach((b) => {
    //   res.send(b);
    let {
      title,
      writer,
      category,
      almira,
      shelf,
      publisher,

      isbn,

      totalPage,
      yearOfPublication,
      description,
      price,
    } = b;
    let book = new Book({
      title,
      writer,
      category,
      almira,
      shelf,
      publisher,

      isbn,

      totalPage,
      yearOfPublication,
      description,
      price,
    });

    book
      .save()
      .then((b) => {
        console.log("posted to mongo", b);
      })
      .catch((e) => {
        console.log(e);
        res.json({
          message: "Error Occurred",
        });
      });
  });
};

export const findDetails = async (req, res, next) => {
  console.log('hlw')
  const filter = req.body.filter.toLowerCase();
  const value = req.body.keyword.toLowerCase();
  
  const searchObj = {};
  searchObj[filter] = value;

  try {
    // Fetch books from database
    const books = await Book.find(searchObj)
    // .skip(PER_PAGE * page - PER_PAGE)
    // .limit(PER_PAGE);
    res.send(books)
    console.log(books)
    // Get the count of total available book of given filter
    const count = await Book.find(searchObj).countDocuments();

  } catch (err) {
    console.log(err);
  }
};
