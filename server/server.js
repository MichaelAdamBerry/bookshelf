require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

//for static files
//app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

//for production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join((__dirname = "client/build/index.html")));
  });
}

// //for build mode
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

//start server
app.listen(port, err => {
  if (err) {
    console.warn(err);
  }
  console.log("Listening on port " + port);
});
