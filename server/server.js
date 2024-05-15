const express = require("express");
const CORS = require("cors");
require("dotenv").config();
const booksRoutes = require("./routes/books");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(CORS());
app.use(express.json());
app.use("/", booksRoutes);

app.listen(PORT, () => {
  console.log("book hive");
});
