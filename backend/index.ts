import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes";
require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/books", bookRoutes);
app.use("/test", (req, res) => {
  console.log("Body: ", req.body);
  console.log("Query: ", req.query);
  let { a, b, c } = req.query;

  var d = "4";
  var x = { a, b, c, d };
  console.log("X", x);
  res.send("success");
});

const DB_URL = process.env.DB_URL || "mongodb://localhost/library_db";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running at port ${PORT}'`))
  )
  .catch((e) => console.log(e.message));

mongoose.set("useFindAndModify", false);
