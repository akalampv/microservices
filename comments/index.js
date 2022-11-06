const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const commentsByPostId = {};

let id = 1;

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] ?? {});
});

app.post('/posts/:id/comments', (req, res) => {
    const { content } = req.body;
    const comments = commentsByPostId[req.params.id] ?? {};
    comments[id] = {
        id,
        content,
    };
    commentsByPostId[req.params.id] = comments;

    id++;

    res.status(201).send(comments);
});

app.listen(4001, () => {
    console.log('Listening on 4001');
});
