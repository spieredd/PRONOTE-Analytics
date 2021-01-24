const express = require('express');

const app = express();

app.use(express.static('frontend'));

const get_user_data = require('./scraping_bot');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // let username = process.env.PRONOTE_USERNAME;
    // let password = process.env.PRONOTE_PASSWORD;
    // let link = process.env.PRONOTE_LINK;

    const username = req.query.username;
    const password = req.query.password;
    const link = req.query.link;

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

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});