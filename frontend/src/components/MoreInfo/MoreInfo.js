import React from "react";
import { Paper } from "@material-ui/core";
const MoreInfo = (props) => {
  const book = props.clickedBook;
  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 700 }}>
      <br />
      <br />
      <br />
      <Paper style={{ padding: 16, textAlign: "center", lineHeight: "22px" }}>
        <h4>বইয়ের নামঃ {book.title}</h4>
        <h5>লেখক/লেখিকাঃ {book.writer}</h5>
        <h6>ক্যাটাগরিঃ {book.category}</h6>
        <h6>প্রকাশনীঃ {book.publisher}</h6>
        <h6>আলমারি নংঃ {book.almira}</h6>
        <h6>তাক নংঃ {book.shelf}</h6>
        <h6>সংক্ষিপ্ত বিবরনীঃ {book.description}</h6>
        <h6>প্রকাশকাল (সাল)ঃ {book.yearOfPublication}</h6>
        <h6>আইএসবিএনঃ {book.isbn}</h6>
        <h6>মোট পৃষ্ঠাসংখ্যাঃ {book.totalPage}</h6>
        <h6>দামঃ {book.price}</h6>
      </Paper>
    </div>
  );
};

export default MoreInfo;
