import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import * as ReactBootstrap from 'react-bootstrap';
// import data from './books.json';

// const newData = data.map((data) => data)
// console.log(data)


export default function StickyHeadTable(props) {
  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    container: {
      maxHeight: 440,
    },
  });
  let data = props.data;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // console.log(data);
  // console.log(props.data);

  const columns = [
    { id: "title", label: "Title", align: "left" },
    { id: "writer", label: "Writer", align: "left" },
    { id: "category", label: "Category", align: "left" },
    { id: "publisher", label: "Publisher", align: "left" },
    { id: "almira", label: "Almira", align: "center" },
    { id: "shelf", label: "Shelf", align: "center" },
    { id: "moreInfo", label: "More info", align: "center" },
    // { id: "isbn", label: "ISBN", align: "center" },
    // { id: "totalPage", label: "Total Page", align: "center" },
    // { id: "yearOfPublication", label: "Year Of Publication", align: "center" },
    // { id: "description", label: "Description", align: "center" },
    // { id: "price", label: "Price", align: "center" },

    { id: "action", label: "Action", align: "center" },
  ];
  const moreInfo = (
    <div>
      <ReactBootstrap.Button variant="success">More info</ReactBootstrap.Button>
    </div>
  );

  const action = (
    <div>
      <ReactBootstrap.Button variant="warning">Edit</ReactBootstrap.Button>{" "}
      <ReactBootstrap.Button variant="danger">Delete</ReactBootstrap.Button>
    </div>
  );

  // fetch("./books.json")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  // function displayUser(users) {
  // console.log(users);
  // const userNames = users.map(user => user.username);
  // const ul = document.getElementById("users-container");
  // for(let i=0;i<userNames.length;i++){
  //     const username = userNames[i];
  //     const li = document.createElement("li");
  //     li.innerText=username;
  //     ul.appendChild(li);
  // }
  // }

  function createData(
    title,
    writer,
    category,
    publisher,
    almira,
    shelf,
    isbn,
    totalPage,
    yearOfPublication,
    description,
    price
  ) {
    return {
      title,
      writer,
      category,
      publisher,
      almira,
      shelf,
      isbn,
      totalPage,
      yearOfPublication,
      description,
      price,
      moreInfo,
      action,
    };
  }

  const rows = [];
  props.data.forEach((book) => {
    // console.log(book)
    rows.push(
      createData(
        book.title,
        book.writer,
        book.category,
        book.publisher,
        book.almira,
        book.shelf,
        book.isbn,
        book.totalPage,
        book.yearOfPublication,
        book.description,
        book.price
      )
    );
  });

  
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}



