import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes";
require("dotenv").config();
import morgan from "morgan";

const app = express();
app.use(cors());

app.use(morgan("combined"));
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/books", bookRoutes);

const DB_URL = process.env.DB_URL || "mongodb://localhost/library_db";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running at port ${PORT}'`))
  )
  .catch((e) => console.log(e.message));

mongoose.set("useFindAndModify", false);
