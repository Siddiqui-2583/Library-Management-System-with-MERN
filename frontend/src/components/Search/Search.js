import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as ReactBootstrap from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./Search.css";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(5),
    minWidth: 220,
  },
  keywordBox: {
    padding: theme.spacing(0),
    marginRight: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(3),
    borderRadius: 4,
    border: "1px solid #757575",
    color: "black",
    height: 56,
    padding: "0 40px",
    boxShadow: "0 3px 5px 2px var(--box-shadow)",
  },
}));

const Search = (props) => {
  // const [data, setDisplayedBooks] =useContext(BookContext);
  let { data, setDisplayedBooks } = props;
  const classes = useStyles();
  const [filterOption, setFilterOption] = useState();
  const [autoCompleteValue, setAutoCompleteValue] = useState();
  const [hint, setHint] = useState([]);
  let searchResult;

  const handleHint = (filter,keyword) => {
    axios
      .get("/books/:keyword")
      .then((response) => {
        //console.log(response.data);
        setHint();
      })
      .catch((err) => console.log(err));
  };

  const handleFilterSelection = (event) => {
    setFilterOption(event.target.value);
    const key = event.target.value;
    console.log(key);
    // let query = 'Allah'
    // setHint(`${data}.slice(0, 300).map((item) => item.${key})`);
    // const queryResult = data.filter(book => book.writer.includes(query) );
    // console.log(queryResult)
    // console.log(`data.slice(0, 300).map((item) => item.${key})`);
    switch (key) {
      case "everywhere":
        setHint([]);
        break;
      case "title":
        setHint(data.slice(0, 300).map((item) => item.title));
        break;
      case "writer":
        setHint(data.slice(0, 300).map((item) => item.writer));
        break;
      case "publisher":
        setHint(data.slice(0, 300).map((item) => item.publisher));
        break;
      case "category":
        setHint(data.slice(0, 300).map((item) => item.category));
        break;
      case "almira":
        setHint(data.slice(0, 300).map((item) => item.almira));
        break;
      case "isbn":
        setHint(data.slice(0, 300).map((item) => item.isbn));
        break;
      default:
        break;
    }
  };
  const handleAutoComplete = (value) => {
    console.log("keyword for auto complete hint: " + value);
    setAutoCompleteValue(value)
    // let match = data.slice(0, 300).includes(value);
    // setHint(match)
    // let matches = data.filter(book => {
    //   const regex = new RegExp(`^${value}`, 'gi');
    //   return book.writer.match(regex) || book.abbr.match(regex)
    // })
    // if (value.length === 0) {
    //   matches=[]
    // }
    // let matches = data.writer.map((book) => book.includes("Allah"));
    // let x=matches.map(book => book.includes('Allah'))
    // console.log(matches)
    
    // console.log(`data.slice(0, 300).map((item) => item.${key})`);
    // switch (value) {
    //   case "everywhere":
    //     setHint([]);
    //     break;
    //   case "title":
    //     setHint(data.slice(0, 300).map((item) => item.title));
    //     break;
    //   case "writer":
    //     setHint(data.slice(0, 300).map((item) => item.writer));
    //     break;
    //   case "publisher":
    //     setHint(data.slice(0, 300).map((item) => item.publisher));
    //     break;
    //   case "category":
    //     setHint(data.slice(0, 300).map((item) => item.category));
    //     break;
    //   case "almira":
    //     setHint(data.slice(0, 300).map((item) => item.almira));
    //     break;
    //   case "isbn":
    //     setHint(data.slice(0, 300).map((item) => item.isbn));
    //     break;
    //   default:
    //     break;
    // }
  }
  const handleSearchResult = () => {
    console.log(filterOption, autoCompleteValue);
    // searchResult = data
    //   .slice(0, 300)
    //   .filter(`(item) => item.${filterOption} === ${autoCompleteValue}`);  
    
    switch (filterOption) {
      case "everywhere":
        searchResult = [];
        break;
      case "title":
        searchResult = data
          .slice(0, 300)
          .filter((item) => item.title === autoCompleteValue);
        break;
      case "writer":
        searchResult = data
          .slice(0, 300)
          .filter((item) => item.writer === autoCompleteValue);
        break;
      case "publisher":
        searchResult = data
          .slice(0, 300)
          .filter((item) => item.publisher === autoCompleteValue);
        break;
      case "category":
        searchResult = data
          .slice(0, 300)
          .filter((item) => item.category === autoCompleteValue);
        break;
      case "almira":
        searchResult = data
          .slice(0, 300)
          .filter((item) => item.almira === autoCompleteValue);
        break;
      case "isbn":
        searchResult = data
          .slice(0, 300)
          .filter((item) => item.isbn === autoCompleteValue);
        break;
      default:
        break;
    }
    // console.log(searchResult);
    // // getSearchResult(searchResult)
    setDisplayedBooks(searchResult);
  };

  return (
    <div className="pt-2">
      <br />
      <ReactBootstrap.Container>
        <ReactBootstrap.Row>
          <ReactBootstrap.Col xs={12} sm={6} md={6} lg={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Filter Option
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={handleFilterSelection}
                label="Select Filter Option"
              >
                {/* <MenuItem value={"everywhere"}>Search Everywhere</MenuItem> */}
                <MenuItem value={"title"}>Book title</MenuItem>
                <MenuItem value={"writer"}>Writer</MenuItem>
                <MenuItem value={"category"}>Category</MenuItem>
                <MenuItem value={"publisher"}>Publisher</MenuItem>
                {/* <MenuItem value={"almira"}>Almira</MenuItem>
                <MenuItem value={"isbn"}>ISBN</MenuItem> */}
              </Select>
            </FormControl>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col xs={12} sm={6} md={6} lg={4}>
            <Autocomplete
              options={hint}
              className={classes.keywordBox}
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              onChange={(event, newValue) => {
                handleAutoComplete(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Enter the keyword"
                  margin="normal"
                  variant="outlined"
                  onChange={(event) => {
                    handleAutoComplete(event.target.value);
                  }}
                />
              )}
            />
          </ReactBootstrap.Col>
          <ReactBootstrap.Col xs={12} sm={12} md={12} lg={4}>
            <Button className={classes.button} onClick={() => handleSearchResult()}>
              Search
            </Button>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      </ReactBootstrap.Container>
    </div>
  );
};

export default Search;
