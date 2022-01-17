const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 5000;

// app.use(cors());
app.listen(PORT, () => {
  console.log(`Serve is Running on Port: ${PORT}`);
});

app.use("/meusite", express.static(path.join(__dirname, "client")));

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("<h1>Hello World from GET</h1>");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("<h1>Hello World from POST</h1>");
});

app.put("/", (req, res) => {
  console.log(req.body);
  res.send("<h1>Hello World from PUT</h1>");
});

app.delete("/", (req, res) => {
  console.log(req.body);
  res.send("<h1>Hello World from DELETE</h1>");
});
