// app.js

const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');
require("./db/conn");

app.use(cors());
app.use(express.json());

// API

const articles = require("./routes/articles");
app.use("/routes/articles", articles);

// app.use(express.static(path.join(__dirname, '../build')))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build'))
// }) 

// Start Server

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});