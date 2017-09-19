require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/users');

const app = express();
const PORT = process.env.PORT;

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

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then(todo => {
        if(!todo){
            return res.status(404).send();
        }

        res.json({todo});
    }).catch(err => {
        res.status(400).send();
    })
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completedAt = null;
        body.completed = false;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }

        return res.status(200).json({todo});
    }).catch(error => {res.status(400).send();});
});

//POST /users

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    })
    .then(token => {
        res.header('x-auth', token).send(user);
    })
    .catch(err => res.status(400).send({message: 'Unable to create user.'}));
});

app.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
})

module.exports = {
    app
};

