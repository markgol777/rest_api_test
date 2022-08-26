require('dotenv').config();
//connecting env library
const PORT = 3000;

const express = require('express');
//connecting express
const app = express();

const mongoose = require('mongoose');
//connecting mongoose

mongoose.connect(process.env.DATABASE_URL);
//connetcing to database

const db = mongoose.connection;

db.on('error', (err) => console.error(err));
//checking if there any errors with our database

db.once('open', () => console.log('Connected to DataBase'));
//once open send a message to know

app.use(express.json());
//making our data base accpet json format

const subscribersRouter = require('./routes/subscribers');
/*
conecting to routes
(subscriber can be anything just a name our localhost called)
*/
app.use('/subscribers', subscribersRouter);
/* everything that will have "subscribers" url will go into ./routes/subscribers.js router */


app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
// finally running our server