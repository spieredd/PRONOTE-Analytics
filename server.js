const express = require('express');
const chalk = require('chalk');
const router = require('./router');
const mongoose = require('mongoose');
const user_average_database = require("./model");

const app = express();

app.use(express.static('frontend'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded());
app.use(router);

const get_user_data = require('./bot');

const PORT = process.env.PORT || 3000;

let uri = `mongodb+srv://admin:${process.env.DATABASE_PASSWORD}@cluster0.gnlov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri,{
    useUnifiedTopology: true,
    useNewUrlParser: true 
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.get('/api', (req, res) => {
    let username = process.env.PRONOTE_USERNAME;
    let password = process.env.PRONOTE_PASSWORD;
    let link = process.env.PRONOTE_LINK;

    //const username = req.query.username;
    //const password = req.query.password;
    //const link = req.query.link;

    if (username && password && link) {
        get_user_data(username, password, link)
            .then(user_data => {
                res.status(200);
                res.json(user_data);
            });
    } else {
        console.log("No parameter")
        res.sendFile(__dirname + '/frontend/error.html');
    }
});

app.post('/',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const link = req.body.link;
    if (username && password && link) {
        get_user_data(username, password, link)
            .then(user_data => {
                res.status(200);
                res.json(user_data);
            });
    } else {
        console.log("No parameter")
        res.sendFile(__dirname + '/frontend/error.html');
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});