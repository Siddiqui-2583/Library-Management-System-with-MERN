import React from 'react';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
} from "@material-ui/core";
const MoreInfo = (props) => {
    let {
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
    price } = props.clickedBook;
  console.log(title);
    return (
      <div style={{ padding: 16, margin: "auto", maxWidth: 700 }}>
        <br />
        <br />
        <br />
        <Paper style={{ padding: 16, textAlign: "center", lineHeight: "22px"}}>
          <h4>বইয়ের নামঃ {title}</h4>
          <h4>লেখক/লেখিকাঃ {writer}</h4>
          <h6>ক্যাটাগরিঃ {category}</h6>
          <h6>প্রকাশনীঃ {publisher}</h6>
          <h6>আলমারি নং {almira}</h6>
          <h6>তাক নং {shelf}</h6>
          <h6>সংক্ষিপ্ত বিবরনীঃ {description}</h6>
          <h6>প্রকাশকাল(সাল) ঃ {yearOfPublication}</h6>
          <h6>আইএসবিএনঃ {isbn}</h6>
          <h6>মোট পৃষ্ঠাসংখ্যাঃ {totalPage}</h6>
          <h6>দামঃ {price}</h6>
        </Paper>
      </div>
    );
};

export default MoreInfo;