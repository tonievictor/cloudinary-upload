const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fileupload = require("express-fileupload");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(fileupload({ useTempFiles: true }));

dotenv.config();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to the server" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is up and running`);
});
