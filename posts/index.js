const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const { randomBytes } = require('crypto');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const posts = {};

let id = 1;

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    // const id = randomBytes(4).toString('hex');

    const { title } = req.body;

    posts[id] = {
        id,
        title,
    };

    id++;

    res.status(201).send(posts[id-1]);
});

app.listen(4000, () => {
    console.log('Listening on 4000');
});
