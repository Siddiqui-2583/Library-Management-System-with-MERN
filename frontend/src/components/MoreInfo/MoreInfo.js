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
      price} = props;
    return (
        <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
            <br/><br/><br/>
            <Paper style={{ padding: 16 }}>
                <h2>{ props}</h2>
            </Paper>
        </div>
    );
};

export default MoreInfo;