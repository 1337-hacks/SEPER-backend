// app.js

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/articles"));

// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {

  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

//-------------------------------------------------------------------------------

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path')
// const app = express();
// require('./db');

// app.use(bodyParser.json());
// app.use(cors());

// // API
// const users = require('/api/users');
// app.use('/api/users', users);

// app.use(express.static(path.join(__dirname, '../build')))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build'))
// })

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });