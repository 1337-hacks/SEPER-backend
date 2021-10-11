const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');
require("./db/conn");

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Hello world!'));

// API

const articles = require("./routes/articles");
app.use("/routes/articles", articles);

// Start Server

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
