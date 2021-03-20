import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20%",
      marginBottom: "15px",
      minWidth: 220,
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "15px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "35%",
      marginBottom: "15px",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      marginBottom: "15px",
    },
  },
  button: {
    borderRadius: 4,
    height: 56,
    padding: "0 40px",
    boxShadow: "0 3px 5px 2px var(--box-shadow)",
  },
  keywordBox: {
    minWidth: 220,
    padding: "0 40px",
  },
}));
const Search2 = (props) => {
  let { data, setDisplayedBooks } = props;
  const classes = useStyles();
   const [autoCompleteValue, setAutoCompleteValue] = useState("");
  let filter;
  const [filterOption, setFilterOption] = useState();
  const [hint, setHint] = useState([]);
  

  const handleFilterSelection = (event) => {
    setFilterOption(event.target.value);

    // data.find(
    //   { writer: { $regex: "All", $options: "i" } },
    //   function (err, docs) {}
    // );
    // console.log(search('Alla'));
    const key = event.target.value;
    console.log(`data.slice(0, 300).map((item) => item.${key})`);
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

  return (
    <Container fixed>
      <Grid justify="center">
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Select Filter Option
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={filter}
              onChange={handleFilterSelection}
              label="Select Filter Option "
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
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Autocomplete
            className={classes.formControl}
            onChange={(event, value) => setAutoCompleteValue(value)}
            options={hint}
            // filterOptions={(options, state) => options}
            // className={classes.keywordBox}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            // options={data.map((item) => item.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Enter the keyword"
                variant="outlined"
                value={autoCompleteValue}
                // onChange={handleAutoCompleteOnChange}
              />
            )}
          />
        </Grid>
        <Grid className={classes.formControl} item xs={12} sm={6} md={6} lg={4}>
          <Button className={classes.button} size="large" variant="outlined">
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Search2;