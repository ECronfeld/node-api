// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

  if(err){
    return console.log('failed to connect to db server');
  }
  console.log('--------------------------Connected to MongoDB server--------------------------');

  const db = client.db('TodoApp')

  //delete many
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) =>{
  //   console.log(result);
  // })
  //delete one
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) =>{
  //   console.log(result);
  // })
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
  //   console.log(result);
  // })
  //delete many Users
  // db.collection('Users').deleteMany({name: 'Emil'}).then((result) => {
  //   console.log(result);
  // })
  //findOneAndDeletebyID
  db.collection('Users').findOneAndDelete({
   _id: new ObjectID('5beacd322c7c6bd4e593b29f')
 }).then( (result) => {
   console.log(result);
 })
  // client.close();

});
