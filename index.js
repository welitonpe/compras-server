const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const { con } = require("./connetion/con");
const {GET} = require('./queries/get')



const path = require("path");
const { send } = require("process");
const app = express();
const PORT = 5000;

app.use("/", bodyParser.json());
app.use("/app", express.static(path.join(__dirname, "client")));

app.get("/", (req, res) => {
  res.type("json");
  con.query("SELECT * FROM user", (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post("/", (req, res) => {
  res.type("json");
  var sql = `INSERT INTO user (user_name, pass_password, user_email) SELECT * FROM (SELECT '${req.body.name}', '${req.body.senha}', '${req.body.email}') AS tmp WHERE NOT EXISTS (SELECT user_email FROM user WHERE user_email= '${req.body.email}') LIMIT 1`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });

  // con.connect((err) => {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = `INSERT INTO user (user_name,pass_password,user_email) VALUES('${req.body.name}', '${req.body.senha}', '${req.body.email}')`;
  //   con.query(sql, (err, result) => {
  //     if (err) throw err;
  //     console.log("1 usuario foi adicionado com sucesso");
  //   });
  // });
  // res.send(req.body);
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
