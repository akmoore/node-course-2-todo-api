const {mongoose} = require('../server/db/mongoose');
const {ObjectID} = require('mongodb');
// import {Todo} from '../server/models/todo';
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/users');

// var id = '59b0557550b942af0c4afe3c';
var userId = '59b03cafa013baa81463e58a';

// if(!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({_id: id}).then(todos => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({_id: id}).then(todo => {
//     if(!todo){
//         return console.log('Find One:', 'There are no todos');
//     }
//     console.log('Todo:', todo);
// });

// Todo.findById(id).then(todo => {
//     console.log('Todo:', todo);
// }).catch(err => {
//     console.log(err);
// });

User.findById(userId).then(user => {
    if(!user){
        return console.log('Unable to find user.');
    }
    console.log('User:', user);
}).catch(err => {
    console.log(err);
});

