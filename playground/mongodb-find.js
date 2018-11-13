// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

  if(err){
    return console.log('failed to connect to db server');
  }
  console.log('--------------------------Connected to MongoDB server--------------------------');

  const db = client.db('TodoApp')

  // db.collection('Todos').find({
  //   _id: new ObjectID('5beac5f46ae47bd46e28ccb2')
  // }).toArray().then( (docs) => {
  //
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //
  // }, (err) => {
  //
  //   console.log('Unable to fetch todos', err);
  //
  // });

  db.collection('Users').find({name: 'Emil'}).count().then( (count, docs) => {
    console.log('Todos');
    console.log(`todos count: ${count}`);

  }, (err) => {

    console.log('Unable to fetch todos', err);

  });

  // client.close();

});
