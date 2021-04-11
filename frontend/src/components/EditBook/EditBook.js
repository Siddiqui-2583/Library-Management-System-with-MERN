import React from "react";
import ReactDOM from "react-dom";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
} from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";


const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(300);
  // window.alert(JSON.stringify(values, 0, 2));
  // console.log(values);
  // console.log(typeof (values));

  // const response = await axios.post(
  //   "http://localhost:5000/add-new-book",
  //   values
  // );
  // console.log(response)
  axios
    .post("http://localhost:5000/books/edit", values)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

//   fetch("http://localhost:5000/add-new-book", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(values),
//   })
//     .then((res) => res.json())
//     .then((order) => {
//       console.log(order);
//     });
}
const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.writer) {
    errors.writer = "Required";
  }
  if (!values.category) {
    errors.category = "Required";
  }
  if (!values.publisher) {
    errors.publisher = "Required";
  }
  return errors;
};

function Add() {
  
  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <CssBaseline />
      <br />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        নতুন বই এর তথ্য দিন
      </Typography>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid
                style={{ padding: 10, margin: "auto", maxWidth: 400 }}
                container
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item xs={12} lg={12}>
                  <Field
                    fullWidth
                    required
                    name="title"
                    component={TextField}
                    type="text"
                    label="বইয়ের নাম"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Field
                    fullWidth
                    required
                    name="writer"
                    component={TextField}
                    type="text"
                    label="লেখক/লেখিকা"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Field
                    fullWidth
                    required
                    name="category"
                    component={TextField}
                    type="text"
                    label="ক্যাটাগরি"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Field
                    fullWidth
                    required
                    name="publisher"
                    component={TextField}
                    type="text"
                    label="প্রকাশনী"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Field
                    fullWidth
                    name="description"
                    component={TextField}
                    type="text"
                    label="সংক্ষিপ্ত বর্ণ্না"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    id="standard-basic"
                    label="আলমারি নং"
                    name="almira"
                    component={TextField}
                    type="number"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    id="standard-basic"
                    label="তাক নং"
                    name="shelf"
                    component={TextField}
                    type="number"
                  />
                </Grid>

                <Grid item xs={6}>
                  <Field
                    id="standard-basic"
                    label="আইএসবিএন"
                    name="isbn"
                    component={TextField}
                    type="text"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    id="standard-basic"
                    label="প্রকাশের সাল"
                    name="yearOfPublication"
                    component={TextField}
                    type="text"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    id="standard-basic"
                    label="মোট পৃষ্ঠা সংখ্যা"
                    name="totalPage"
                    component={TextField}
                    type="number"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    id="standard-basic"
                    label="দাম"
                    name="price"
                    component={TextField}
                    type="number"
                  />
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Link to={"/"}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting}
                    >
                      Submit
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
}

export default Add;
