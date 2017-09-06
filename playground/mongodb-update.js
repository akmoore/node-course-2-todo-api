const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server.');

//    db.collection('Todos').findOneAndUpdate({text: 'Eat Lunch'}, {$set: {completed: true}}, {returnOriginal: false}).then(result => {
//         console.log(JSON.stringify(result, undefined, 2));
//    });  

   db.collection('Users').findOneAndUpdate({
       _id: ObjectID('59af0be86e745c9e354b6426')
    }, {
        $set: {name: 'Shirley Jean Barber Moore'},
        $inc: {age: 1}
    }, {
        returnOriginal: false
    })
    .then(result => {
       console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});