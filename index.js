const express = require("express");
const path = require("path");
const port = 3000;
const app = express();
const adminTbl = require("./model/adminTbl");
const db = require("./config/database");

app.set("view engine", "ejs");
app.use(express.urlencoded());
// app.use("/", express.static(path.join(__dirname, "/public")));

app.post("/insertData", (req, res) => {
  const { name, email, phone, password } = req.body;
  console.log(req.body);
  // res.redirect("/");
  adminTbl
    .create({
      name,
      email,
      phone,
      password,
    })
    .then((single) => {
      console.log("inserted...!!!!");
      res.redirect("/");
      return false;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
});

app.get("/delete/:id", (req, res)=>{

  let id = req.params.id;

  adminTbl.findByIdAndDelete(id)
  .then((data)=>{
    console.log("items deleted successfully");
    res.redirect("/")
    return false
  })
  console.log(id);
})

app.get("/", (req, res) => {
  adminTbl
    .find()
    .then((alldata) => {
      return res.render("index", {
        data: alldata,
      });
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
});

app.listen(port, (err) => {
  if (err) {
    console.log("server is not connected...!");
    return false;
  }
  console.log("server is  connected to port ", +port);
});
