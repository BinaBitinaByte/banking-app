require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');

const app = express();

massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('Database Connected');
}).catch(err => {
    console.log(err);
})


app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))


app.listen(5050, () => console.log('Listening on Port 5050'))