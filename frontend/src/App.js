import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Search from "./components/Search/Search.js";
import { useState, useEffect } from "react";
import Table from "./components/Table/Table.js";
import AddNewBook from "./components/AddNewBook/AddNewBook.js";
import "./app.css";
import EditBook from "./components/EditBook/EditBook.js";
import MoreInfo from "./components/MoreInfo/MoreInfo.js";
import * as BookService from "./services/bookService.js";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
const App = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [clickedBook, setClickedBook] = useState({});
  const [booksPerPage, setBooksPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);
  const [filter, setFilter] = useState("");
  const [keyword, setKeyword] = useState("");
  const [deletedBookId, setDeletedBookId] = useState(0);

  useEffect(() => {
    setLoading(true);
    BookService.GetBooks(filter, keyword, pageNumber, booksPerPage)
      .then((bookResponse) => {
        setLoading(false);
        setBooks(bookResponse.books);
        setTotalBooks(bookResponse.totalBookCount);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [pageNumber, booksPerPage, deletedBookId, keyword]);

  return (
    <div>
      <ReactNotification />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Search
              setFilter={setFilter}
              setKeyword={setKeyword}
              setPageNumber={setPageNumber}
            />
            <Table
              books={books}
              setClickedBook={setClickedBook}
              setPage={setPageNumber}
              setBooksPerPage={setBooksPerPage}
              totalBookCount={totalBooks}
              booksPerPage={booksPerPage}
              pageNumber={pageNumber}
              setDeletedBookId={setDeletedBookId}
              loading={loading}
            />
          </Route>
          <Route path="/add-new-book">
            <AddNewBook />
          </Route>
          <Route path="/more-info">
            <MoreInfo clickedBook={clickedBook} />
          </Route>
          <Route path="/edit-book">
            <EditBook clickedBook={clickedBook} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
