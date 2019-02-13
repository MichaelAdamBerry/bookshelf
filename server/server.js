require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const fetch = require("node-fetch");
const API_KEY = process.env.API_KEY;

//for static files
//app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

//ROUTES
//returns volume for specific volume id
app.get("/volume-data/id/:id", (req, res) => {
  id = req.params.id;
  const apiURL = `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`;
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.redirect("/");
    });
});

//returns list of volume objects by query
app.get("/list-data/:query", (req, res) => {
  const query = req.params.query;
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

//for production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join((__dirname = "client/build/index.html")));
  });
}

//for build mode

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

//start server

app.get("/", (req, res) => {
  res.send("PORT 5000");
});

app.listen(port, err => {
  if (err) {
    console.warn(err);
  }
  console.log("Listening on port " + port);
});
