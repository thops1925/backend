const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todo = require('./routes/TodoRoutes')
require('dotenv').config()

const app = express()
const Port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

const mongoURI = process.env.URIT;
mongoose
    .connect(
        mongoURI,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => console.log(err));

mongoose.connection.openUri(mongoURI, function (err) {
    if (err) {
        console.log("Failed to connect to database: " + err);
    } else {
        console.log("Successfully connected to database. ");
    }
});


app.use('/thops', todo)
app.listen(Port, () => console.log('listening on port'))