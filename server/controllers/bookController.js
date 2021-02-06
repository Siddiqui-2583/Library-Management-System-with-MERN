import Book from '../models/book.js'

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
export const addBook = (req, res) => {
    res.send()
}