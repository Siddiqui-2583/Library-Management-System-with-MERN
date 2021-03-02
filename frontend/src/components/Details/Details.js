import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(80),
    },
  },
}));
const Details = () => {
  const classes = useStyles();
    return (
      <div className={classes.root}>
        <Paper>
          <h2>Single book info here</h2>
        </Paper>
      </div>
    );
};

export default Details;