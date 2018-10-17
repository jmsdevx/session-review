require("dotenv").config();
const { json } = require("body-parser");
const express = require("express");
const session = require("express-session");
const port = 3001;

const app = express();
app.use(json());

//session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 1
    }
  })
);

//endpoints

let myName = "Tim";
app.put("/api/session", (req, res) => {
  const { name } = req.body;
  if (name === myName) {
    req.session.username = name;
    res.status(200).send(req.session);
  } else {
    res.status(500).send(err => {
      console.log(err);
    });
  }
});

app.listen(port, console.log(`Listening on port${port}`));
