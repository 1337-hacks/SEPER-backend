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

// ren try XD

// import npm packages

// const express = require('express');
// const mongoose = require('mongoose');
// const morgan = require('morgan');
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 8080;

// const routes = require('./routes/articles');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://elijah2:<password>@seper-db.f19fc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// mongoose.connection.on('connected', () => {
//   console.log('mongoose is connected yessir!!!!')
// });

// // data parsing
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// app.use(morgan('tiny'));
// app.use('/api', routes);

// if (process === 'production') {

// }