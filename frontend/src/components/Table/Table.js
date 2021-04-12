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
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
// const useStyles = makeStyles((theme) => ({
//   typography: {
//     padding: theme.spacing(2),
//   },
// }));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function StickyHeadTable(props) {
  const [openDialogue, setOpenDialogue] = React.useState(false);

  const handleClickOpenDialogue = () => {
    setOpenDialogue(true);
  };

  const handleCloseDialogue = () => {
    setOpenDialogue(false);
  };

  let { setClickedBook } = props;
  

  
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

  const handleDelete = (id) => {
    console.log(id,);
    setOpenDialogue(false)
    axios
      .delete("/books/delete/" + id)
      .then((response) => {
        console.log(response.data.title + " deleted successfully!");
      })
      .catch((err) => console.log(err));
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
                      // console.log(row)
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
                            <Link
                              to="/more-info"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              <Button
                                size="small"
                                variant="outlined"
                                onClick={() => {
                                  setClickedBook(row);
                                }}
                              >
                                More info
                              </Button>
                            </Link>
                          </TableCell>
                          <TableCell align="right">
                            <Link to="/edit-book">
                              <IconButton
                                aria-label="edit"
                                onClick={() => {
                                  setClickedBook(row);
                                }}
                                className={classes.margin}
                              >
                                <EditIcon fontSize="small" />
                              </IconButton>
                            </Link>
                            <IconButton
                              aria-label="delete"
                              onClick={() => {
                                // handleDelete(row.id);
                                handleClickOpenDialogue();
                              }}
                              className={classes.margin}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                            <Dialog
                              open={openDialogue}
                              TransitionComponent={Transition}
                              keepMounted
                              onClose={handleCloseDialogue}
                              aria-labelledby="alert-dialog-slide-title"
                              aria-describedby="alert-dialog-slide-description"
                            >
                              <DialogTitle id="alert-dialog-slide-title">
                                {"Delete Book"}
                              </DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                  Do you really want to delete this book?
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button
                                  onClick={handleCloseDialogue}
                                  color="primary"
                                >
                                  No
                                </Button>
                                <Button
                                  onClick={() => {
                                    handleDelete(row.id);
                                    
                                  }}
                                  color="primary"
                                >
                                  Yes
                                </Button>
                              </DialogActions>
                            </Dialog>
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
