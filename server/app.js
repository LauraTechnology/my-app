const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')

app.use(express.urlencoded({

    extended: true

}))

app.use(express.json());



const con = mysql.createConnection({

    host: "localhost",

    user: "database",

    password: "",

    database: "zoo"

});

app.get('/', (req, res) => {
  res.send('Labas, kur tu?! Kada grysi')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})