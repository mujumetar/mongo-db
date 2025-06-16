const express = require("express");
const path = require("path");
const port = 3000;
const app = express();

app.set("view engine", "ejs");

app.use("/", express.static(path.join(__dirname, "/public")))

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, (err) => {
  if (err) {
    console.log("server is not connected...!");
    return false;
  }
  console.log("server is  connected to port ", +port);
});
