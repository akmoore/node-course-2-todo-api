const {mongoose} = require('../server/db/mongoose');
const {ObjectID} = require('mongodb');
// import {Todo} from '../server/models/todo';
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/users');

var id = '59b20bd0bf7f98c8d5440854';

// Todo.remove({}).then(result => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: id}).then(todo => {
//     console.log(todo);
// });

Todo.findByIdAndRemove(id).then(todo => {
    console.log(todo);
});

