import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import * as ReactBootstrap from "react-bootstrap";
import Loading from "../Loading/Loading.js";
import Details from "../Details/Details.js";
import PropTypes from "prop-types";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

// import Fab from "@material-ui/core/Fab";
// import Icon from "@material-ui/core/Icon";
// import DeleteIcon from "@material-ui/icons/Delete";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({
//   typography: {
//     padding: theme.spacing(2),
//   },
// }));

export default function StickyHeadTable(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  let { setClickedBook } = props;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget.children);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      height: "100%",
    },
    container: {
      maxHeight: 500,
    },
    fab: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
    
  }));

  //let data = props.data;
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
    { id: "title", label: "বই", align: "left" },
    { id: "writer", label: "লেখক/লেখিকা", align: "left" },
    { id: "category", label: "ক্যাটাগরি", align: "left" },
    { id: "publisher", label: "প্রকাশনী", align: "left" },
    { id: "almira", label: "আলমারি নং", align: "center" },
    { id: "shelf", label: "তাক নং", align: "center" },
    // { id: "moreInfo", label: "More info", align: "center" },
    // { id: "isbn", label: "ISBN", align: "center" },
    // { id: "totalPage", label: "Total Page", align: "center" },
    // { id: "yearOfPublication", label: "Year Of Publication", align: "center" },
    // { id: "description", label: "Description", align: "center" },
    // { id: "price", label: "Price", align: "center" },
    // { id: "action", label: "Action", align: "center" },
  ];

  
  
const test = (<button>dgdg</button>)
  // const moreInfo = 
  // (
  //   <div>
  //     <ReactBootstrap.Button variant="success" onClick={handleClick}>
  //       More info
  //     </ReactBootstrap.Button>
  //     <Popover
  //       id={id}
  //       open={open}
  //       anchorEl={anchorEl}
  //       onClose={handleClose}
  //       anchorOrigin={{
  //         vertical: "bottom",
  //         horizontal: "center",
  //       }}
  //       transformOrigin={{
  //         vertical: "top",
  //         horizontal: "center",
  //       }}
  //     >
  //       <Details />
  //     </Popover>
  //   </div>
  // );

  const action = (
    <div>
      <ReactBootstrap.Button variant="warning">Edit</ReactBootstrap.Button>{" "}
      {/* <Fab color="secondary" aria-label="Edit" className={classes.fab}>
        <Icon>edit_icon</Icon>
      </Fab> */}
      <ReactBootstrap.Button variant="danger">Delete</ReactBootstrap.Button>
    </div>
  );

  function createData(
    id,
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
  ) {
    return {
      id,
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
     
    };
  }
  const rows = [];
  props.data.forEach((book) => {
    rows.push(
      createData(
        book._id,
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
        book.price,
      )
    );
    
  });

  return (
    <div className="container-fluid">
      <container className="row">
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
                  <TableCell align="right">More info</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              {props.loading === "block" ? (
                <div className="load">
                  <Loading />
                </div>
              ) : (
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                      console.log(row)
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
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
                          <TableCell align="right">
                            {/* <Link
                              to="/more-info"
                              style={{ textDecoration: "none", color: "black" }}
                            > */}
                            <Button
                              size="small"
                              variant="outlined"
                              onClick={() => {                                                                
                                console.log("Row", row);
                              }}
                            >
                              More info
                            </Button>
                            {/* </Link> */}
                          </TableCell>
                          <TableCell align="right">
                            <IconButton
                              aria-label="delete"
                              className={classes.margin}
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              className={classes.margin}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              )}
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
      </container>
    </div>
  );
}

StickyHeadTable.propTypes = {
  classes: PropTypes.object.isRequired,
};
