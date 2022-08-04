const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const app = express();

app.use(express.json());

app.get('/app', function (req, res) {

    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM users', function (error, results, fields) {
      if (error) throw error;

      res.send(results)
    });
  });
});


app.listen(3000, () => {
 console.log('Go to http://localhost:3000/app so you can see the data.');
});