const express = require("express");
const app = express();

const user = [];

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {
  console.log(req.body.name);
  //  req.body.name
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.listen(3000);
