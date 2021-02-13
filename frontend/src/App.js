import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Search from "./components/Search/Search.js";
import{ useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table/Table.js";
import Loading from "./components/Loading/Loading";

const App = () => {
  let searchedBooks;
  const [data, setData] = useState([]);
  const [displayBooks, setDisplayedBooks] = useState([]);
  const [loading, setLoading] = useState("block");
  useEffect(() => {
    axios
      .get("/books")
      .then((response) => {
        console.log(response.data);
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
        <Search
          data={data}
          displayBooks={displayBooks}
          setDisplayedBooks={setDisplayedBooks}
        />
        <Switch>
          <Route path="/">
            {loading === "block" ? 
              <Loading loading={loading} />
             : 
              <Table data={displayBooks} />
            }
            {/* <Table data={displayBooks} /> */}
          </Route>
        </Switch>
      </Router>
      {/* <Home /> */}
    </div>
  );
};

export default App;
