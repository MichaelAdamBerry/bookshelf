const express = require("express");
const app = express();
const port = 5000;
const fetch = require("node-fetch");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let query;

// sets the value of query variable from the POST method in Home Search <form>
//redirects to /list where where react router will mount List component

app.post("/query-list", (req, res) => {
  query = req.body.query;
  console.log(query);

  if (!query) {
    res.redirect("/error");
  } else {
    res.redirect("/list");
  }
});

// called at componentDidMount of List component
app.get("/query-list-data", (req, res) => {
  console.log(query);
  const apiURL =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    query +
    "&orderBy=relevance&printType=books";
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      res.send({ data });
    })
    .catch(err => {
      res.redirect("/");
    });
});

app.get("/", (req, res) => {
  res.send("PORT 5000");
});

// console.log that your server is up and running
app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log("Listening on port " + port);
});
