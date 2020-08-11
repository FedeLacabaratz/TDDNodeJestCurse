const express = require('express');
const bodyParser = require('body-parser');
const { posts } = require('./endpoints');
const { authenticate } = require('./middlewares');
const services = require('./services')
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Injecting Dependencies
const postsHandlers = posts(services);

app.post('/', authenticate, postsHandlers.post);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

module.exports = app;