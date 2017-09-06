const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/users');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo(req.body);
    todo.save().then(todo => {
        res.status(201).send(todo);
    }).catch(err => {
        res.status(400).send(err);
    })
});

app.listen(3001, () => {
    console.log('Started on port 3001');
})
