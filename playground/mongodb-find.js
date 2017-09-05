const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server.');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59af1359c3d24f95159248a7')
    // }).toArray().then((documents) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(documents, undefined, 2));
    // }).catch(err => console.log('Unable to fetch tods', err));

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos');
    //     console.log('Todos count: ' + count);
    // }).catch(err => console.log('Unable to fetch todos', err));

    db.collection('Users').find({name: 'Ken Moore'}).count().then((count) => {
        console.log('Users');
        console.log(`Users count: ${count}`);
    }).catch(err => console.log('Error', err));

    // db.close();
});