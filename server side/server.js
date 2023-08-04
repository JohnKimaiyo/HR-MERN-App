const express = require("express");
const mysql = require("mysql");
const cookieParser = rquire("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const PORT = 5000;
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

con.connect(function (err) {
  if (err) {
    console.log("Mysql connection not connected");
  } else {
    console.log("Mysql connection established");
  }
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users Where email = ? AND password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err)
      return res.json({ Error: "Error  ", Error: "Error in running query" });
    if (result.length > 0) {
      return res.json({ Status: "Success" });
    } else {
      return res.json({ Status: "Error", Error: "Wrong Email or Password" });
    }
  });
});
app.listen(PORT, () => {
  console.log(`<H1>Server is Live and running</h1>`);
});
