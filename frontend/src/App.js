import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Search from "./components/Search/Search.js";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table/Table.js";
import AddNewBook from "./components/AddNewBook/AddNewBook.js";
import "./app.css";
import EditBook from "./components/EditBook/EditBook.js";
import MoreInfo from "./components/MoreInfo/MoreInfo.js";
const App = () => {
  let searchedBooks;
  const [data, setData] = useState([]);
  const [displayBooks, setDisplayedBooks] = useState([]);
  const [clickedBook, setClickedBook] = useState();
  const [loading, setLoading] = useState("block");
  // console.log(clickedBook)
  useEffect(() => {
    axios
      .get("/books")
      .then((response) => {
        //console.log(response.data);
        setData(response.data);
        setDisplayedBooks(response.data);
        setLoading("none");
      })
      .catch((err) => console.log(err));

    if (!searchedBooks) {
      setDisplayedBooks(data);
      
    }
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Search
              data={data}
              displayBooks={displayBooks}
              setLoading={setLoading}
              setDisplayedBooks={setDisplayedBooks}
            />
            {/* {loading === "block" ? 
              <Loading loading={loading} />
             : 
              <Table data={displayBooks} />
            } */}

            <Table
              loading={loading}
              data={displayBooks}
              setClickedBook={setClickedBook}
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
