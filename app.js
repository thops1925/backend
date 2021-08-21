const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const todo = require('./routes/TodoRoutes')

const app = express()
app.use(cors())
app.use(express.json())


mongoose
    .connect(
        process.env.DATA_URI,
        {
            useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true,
        }
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
app.listen(process.env.PORT || 5040, () => console.log('listening on port'))