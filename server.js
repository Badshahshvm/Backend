const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("I am middlewares");
  next();
});
app.use((req, res, next) => {
  console.log("path", req.path, "method", req.method);
  next();
});
app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "GIVE ACCESS") {
    res.send("data");
  }
  next();
});
app.use((req, res, next) => {
  console.log("I am second middlewares");
  next();
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
