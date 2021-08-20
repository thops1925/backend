const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todo = require('./routes/TodoRoutes')
require('dotenv').config()

const app = express()
const Port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

mongoose
    .connect(
        process.env.URIT,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => console.log(err));
mongoose.connection
    .once('open', function () {
        console.log('MongoDB running');
    })
    .on('error', function (err) {
        console.log(err);
    });


app.use('/thops', todo)
app.listen(Port, () => console.log('listening on port'))