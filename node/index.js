const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;
const config = {
  host: "mysql",
  database: "mydb",
  user: "root",
  password: "root",
};

app.get("/", async (req, res) => {
  const connection = mysql.createConnection(config);
  const sql = `INSERT INTO people(name) values('Francisco')`;
  connection.query(sql);
  connection.query("SELECT * FROM people", (err, response) => {
    res.send(
      `<h1>Full Cycle Rocks!</h1><br><h3>${response.map(
        (user) => ` ${user.name}`
      )}</h3>`
    );
  });

  connection.end();
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
