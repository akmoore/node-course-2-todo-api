const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server.');

   //deleteMany

//    db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
//        console.log(result);
//    })

   //deleteOne

//    db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then(result => {
//        console.log(result);
//    })

   //findOneAndDelete
//    db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
//        console.log(result);
//    })

//Working with Users

    // db.collection('Users').deleteMany({name: 'John'}).then(result => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({name: 'Dortie Moore'}).then(result => {
        console.log(result);
    });

    // db.close();
});