// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

if(err){
  return console.log('failed to connect to db server');
}
console.log('--------------------------Connected to MongoDB server--------------------------');

const db = client.db('TodoApp')

// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
//
//   }, (err, result) => {
//   if(err){
//     return console.log('Unable to insert todo', err);
//   }
//
//   console.log(JSON.stringify(result.ops, undefined, 2));
//
//   })

//insert new doc into Users collection(name, age, location string)
// db.collection('Users').insertOne({
//
//   name: 'Emil',
//   age: 25,
//   location: 'Denmark'
//
// }, (err, result) => {
//
//   if(err){
//     return console.log('Unable to insert user', err);
//   }
//
//   // console.log(result.ops[0]._id.getTimestamp());
//
// })

client.close();

});
