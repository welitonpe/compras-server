const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app",
});

const path = require("path");
const app = express();
const PORT = 5000;

app.use("/", bodyParser.json());
app.use("/app", express.static(path.join(__dirname, "client")));

app.get("/", (req, res) => {
  res.type("json");

  con.connect((err) => {
    if (err) throw err;
    con.query("SELECT * FROM user", (err, result, fields) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
});

app.post("/", (req, res) => {
  con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    var sql = `INSERT INTO user (user_name,pass_password,user_email) VALUES('${req.body.name}', '${req.body.senha}', '${req.body.email}')`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      console.log("1 usuario foi adicionado com sucesso");
    });
  });
  res.send(req.body);
});

app.put("/", (req, res) => {
  res.send("<h1>Hello World from PUT</h1>");
});

app.delete("/", (req, res) => {
  res.send("<h1>Hello World from DELETE</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is Running on port: ${PORT}`);
});
