require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
const fetch = require("node-fetch");
const API_KEY = process.env.API_KEY;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PORT 5000");
});

app.listen(port, err => {
  if (err) {
    console.warn(err);
  }
  console.log("Listening on port " + port);
});

//ROUTES

//returns volume for specific volume id
app.get("/volume-data/id/:id", (req, res) => {
  id = req.params.id;
  const apiURL = `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`;
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      console.log("volume data is ", data);
      res.send({ data });
    })
    .catch(err => {
      res.redirect("/");
    });
});

//returns list of volume objects by query
app.get("/list-data/:query", (req, res) => {
  const query = req.params.query;
  console.log("list query called with", query);
  const apiURL =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    query +
    "&orderBy=relevance&printType=books";
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.redirect("/");
    });
});
