const express = require("express");
const app = express();
const port = 3003;
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "zoo",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//Routing
app.get("/", (req, res) => {
  res.send("Labas, kur tu?! Kada grysi");
});

//req REQUEST, res RESPOND - abu  strings (tekstiniai)
app.get("/labas/:id ", (req, res) => {
  res.send(`Pats tu ${req.params.id}.`);
});

app.get("/test", (req, res) => {
  res.send(JSON.stringify({ test: "OK" }));
});

// Visi gyvunai
app.get("/animals", (req, res) => {
  const sql = `
      SELECT *
      FROM animals
  `;
  con.query(sql, (err, results) => {
    if (err) {
      throw err;
    } else {res.send(results)};
  });
//  res.send(JSON.stringify({ test: "OK" })); - cia buvom pasirase, kad pabandyti ar veikia.
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
