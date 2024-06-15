const express = require("express");

const app = express();

app.use((req, res) => {
  console.log("I am middlewares");
  res.send("middlewares finished...");
});
app.get("/", (req, res) => {
  res.send("hi, I am shivam");
});

app.get("/random", (req, res) => {
  res.send("hi, I am random");
});
app.listen(3000, () => {
  console.log("server s live");
});
