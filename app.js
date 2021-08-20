const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config({ path: '.env' });

const todo = require('./routes/TodoRoutes')

const app = express()
app.use(cors())
app.use(express.json())

mongoose
    .connect(
        process.env.URIT,
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
app.listen(process.env.PORT || 5000, () => console.log('listening on port'))