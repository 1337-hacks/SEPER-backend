// Connect to MongoDB (Mongoose)

const mongoose = require('mongoose');
const connection = "mongodb+srv://elijah2:mongodbcoolpassword@seper-db.f19fc.mongodb.net/seper_database?retryWrites=true&w=majority";

mongoose.connect(connection)
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
