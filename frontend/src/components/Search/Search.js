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
import * as BookService from "../../services/bookService";
import "./Search.css";

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
  let filterOptions = [
    { key: "title", value: "Book title" },
    { key: "writer", value: "Writer" },
    { key: "category", value: "Category" },
    { key: "publisher", value: "Publisher" },
    // {"key": "almira", "value": "Almira"},
    // {"key": "isbn", "value": "ISBN"}
  ];

  let { setFilter, setKeyword, setPageNumber } = props;
  const classes = useStyles();
  const [hint, setHint] = useState([]);
  const [autoCompleteValue, setAutoCompleteValue] = useState("");
  const [filterOption, setFilterOption] = useState(filterOptions[0].key);

  const handleSearchResult = () => {
    setPageNumber(0);
    setFilter(filterOption);
    setKeyword(autoCompleteValue);
  };

  const handleHint = () => {
    if (autoCompleteValue === "") {
      setHint([]);
      return;
    }

    BookService.GetBookHints(filterOption, autoCompleteValue)
      .then((bookHints) => {
        setHint(bookHints);
      })
      .catch((err) => console.log(err));
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
                onChange={(event) => {
                  setFilterOption(event.target.value);
                }}
                label="Select Filter Option"
                defaultValue={filterOptions[0].key}
              >
                {filterOptions.map((option) => {
                  return <MenuItem value={option.key}>{option.value}</MenuItem>;
                })}
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
                setAutoCompleteValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Enter the keyword"
                  margin="normal"
                  variant="outlined"
                  onChange={(event) => {
                    setAutoCompleteValue(event.target.value);
                    handleHint();
                  }}
                />
              )}
            />
          </ReactBootstrap.Col>
          <ReactBootstrap.Col xs={12} sm={12} md={12} lg={4}>
            <Button className={classes.button} onClick={handleSearchResult}>
              Search
            </Button>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      </ReactBootstrap.Container>
    </div>
  );
};

export default Search;
