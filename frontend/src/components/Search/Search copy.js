import React from 'react';
import { useEffect, useState } from "react";
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
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(28),
    minWidth: 120,
  },
  keywordBox: {
    padding: theme.spacing(0),
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(5),
    borderRadius: 4,
    border: "1px solid #757575",
    color: "black",
    height: 56,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px var(--box-shadow)",
  },
}));

  const Search2 = (props) => {
    const classes = useStyles();
    let filter;
    const [hint, setHint] = React.useState([]);
    const [autoSelectValue, setAutoSelectValue] = React.useState([]);
    useEffect(() => {
      console.log(autoSelectValue)
    }, []);
    const handleChange = (event) => {
      // setHint(event.target.value);
      console.log(event.target.value);
      const key = event.target.value
      switch (key) {
        case "everywhere":
          setHint([]);
          break;
        case "title":
          setHint(props.data.slice(0, 300).map((item) => item.title));
          break;
        case "writer":
          setHint(props.data.slice(0, 300).map((item) => item.writer));
          break;
        case "publisher":
          setHint(props.data.slice(0, 300).map((item) => item.publisher));
          break;
        case "category":
          setHint(props.data.slice(0, 300).map((item) => item.category));
          break;
        case "almira":
          setHint(props.data.slice(0, 300).map((item) => item.almira));
          break;
        case "isbn":
          setHint(props.data.slice(0, 300).map((item) => item.isbn));
          break;
        default:
          break;
      }
      
    };
    
    return (
      <div className="pt-2">
        <ReactBootstrap.Container pt-0>
          <ReactBootstrap.Row>
            <ReactBootstrap.Col>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Filter Option
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={filter}
                  onChange={handleChange}
                  label="Select Filter Option"
                >
                  <MenuItem value={"everywhere"}>Search Everywhere</MenuItem>
                  <MenuItem value={"title"}>Book title</MenuItem>
                  <MenuItem value={"writer"}>Writer</MenuItem>
                  <MenuItem value={"category"}>Category</MenuItem>
                  <MenuItem value={"publisher"}>Publisher</MenuItem>
                  <MenuItem value={"almira"}>Almira</MenuItem>
                  <MenuItem value={"isbn"}>ISBN</MenuItem>
                </Select>
              </FormControl>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col>
              <Autocomplete
                className={classes.keywordBox}
                freeSolo
                id="free-solo-2-demo"
                value={autoSelectValue}
                disableClearable
                
                options={hint}
                // options={props.data.map((item) => item.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Enter the keyword"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: "search" }}
                  />
                )}
              />
            </ReactBootstrap.Col>
            <ReactBootstrap.Col>
              <Button className={classes.button}>Search</Button>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </div>
    );
  };

export default Search2;