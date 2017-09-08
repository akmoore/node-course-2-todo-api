const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/users');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/todos', (req, res) => {
    var todo = new Todo(req.body);
    todo.save().then(todo => {
        res.status(201).send(todo);
    }).catch(err => {
        res.status(400).send(err);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.json({todos});
    }).catch(err => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req, res) => {
    var _id = req.params.id;

    if(!ObjectID.isValid(_id)){
        return res.status(404).send();
    }

    Todo.findById(_id).then(todo => {
        if(!todo){
            res.status(404).send('Unable to find Todo record.');
        }
        res.json({todo});
    }).catch(err => {
        res.status(400).send();
    })
});

app.listen(3001, () => {
    console.log('Started on port 3001');
})

module.exports = {
    app
};

