const express = require('express');

const app = express();

const get_user_data = require('./scraping_bot');

const port = process.env.port || 3000;

app.get('/', (req, res) => {
    get_user_data()
        .then(user_data => {
            res.status(200);
            res.json(user_data);
        });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});