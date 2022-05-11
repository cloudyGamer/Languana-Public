//<editor-fold defaultstate="collapsed" desc="insert-examples">
 //      db.collection('words').insertOne({
 //          input: 'Cat',
 //          target: 'Katze',
 //          tag: 'NOUN',
 //          gender: 'FEMININE',
 //          number: 'SINGULAR'
 //      });

 //      db.collection('users').insertOne({
 //           name: 'Carl_Hanratty',
 //           status: 'free'
 //      },(error,result) => {
 //           if (error) {
 //                return console.log('unable to connect user');
 //           }
 //           console.log(result.ops);
 //      });

 //      db.collection('FullStackanov-words').insertMany([{
 //                word: 'Katze',
 //                score: '0.5',
 //                frequency: '20%',
 //                test_freq: '30%'
 //           },
 //           {
 //                word: 'Hund',
 //                score: '0.5',
 //                frequency: '20%',
 //                test_freq: '30%'
 //           }], (error, result) => {
 //           if (error) {
 //                return console.log('unable to connect user');
 //           }
 //           console.log(result.ops);
 //      });
 //</editor-fold>
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

 const connectionURL = 'mongodb://127.0.0.1:27017';
 const databaseName = 'languana';
 const {MongoClient, ObjectId} = require('mongodb');
 //const id = new ObjectId();
 //id.getTimeStamp()

 MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
 if (error) {
 return console.log('Unable to connect');
 }

 const db = client.db(databaseName);
   
   console.log('Connected Successfully!');
 });
 
 //will delete entire document containing matching field
 
  //<editor-fold defaultstate="collapsed" desc="DeleteOne">
//   db.collection('FullStackanov-words').deleteOne({
// word:  "Hund"
//   })
//   .then((result) => {
//   console.log(result);
//     }).catch((error) => {
// console.log(error);
//});
//</editor-fold>   

 //<editor-fold defaultstate="collapsed" desc="deleteMany">
//   db.collection('FullStackanov-words').deleteMany({
// score: 0.2
//   })
//   .then((result) => {
//   console.log(result);
//     }).catch((error) => {
// console.log(error);
//});
//</editor-fold> 

  //<editor-fold defaultstate="collapsed" desc="updateMany">
//   db.collection('FullStackanov-words').updateMany({
// score: "0.5"
//   }, {
// $set: {
// score: 0.5
// }
// })
//   .then((result) => {
//   console.log(result);
//     }).catch((error) => {
// console.log(error);
//});
//</editor-fold>    

//<editor-fold defaultstate="collapsed" desc="inc-one">
//db.collection('FullStackanov-words').updateOne({
//     _id: ObjectId("6114ecb036470cdfa2bec381")
//}, {
//     $inc: {
//          score: 0.2
//     }
//})
//  .then((result) => {
//       console.log(result);
//}).catch((error) => {
//     console.log(error);
//});
//</editor-fold>


 //<editor-fold defaultstate="collapsed" desc="fineOne">
 //db.collection('users').findOne({name:'FullStackanov'}, (error,user) => {
 //          if (error) {
 //           return console.log('Unable to fetch');
 //      } 
 //           console.log(user);
 //      });
 //</editor-fold>

 //<editor-fold defaultstate="collapsed" desc="find-by-id">
//     db.collection('users').findOne({_id: new ObjectId("610adeb18acfba243f37e642")}, (error, user) => {
//          if (error) {
//               return console.log('Unable to fetch');
//          }
//          console.log(user);
//     });
 //</editor-fold>

 //<editor-fold defaultstate="collapsed" desc="find">
//     db.collection('users').find({status: 'premium'}).toArray((error,users) => {
//          if (error) {
//               console.log('Unable to fetch');
//          }
//     });
 //</editor-fold>

//<editor-fold defaultstate="collapsed" desc="updateOne">
//db.collection('users').updateOne({
//     _id: ObjectId("6114c89c7bf8ad5972e06243")
//}, {
//     $set: {
//          name: "Leo_DeCaprio"
//     }
//})
//  .then((result) => {
//       console.log(result);
//}).catch((error) => {
//     console.log(error);
//});
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="updateOne">
//db.collection('FullStackanov-words').updateOne({
//     _id: ObjectId("6114ecb036470cdfa2bec381")
//}, {
//     $set: {
//          score: 0.5
//     }
//})
//  .then((result) => {
//       console.log(result);
//}).catch((error) => {
//     console.log(error);
//});
//</editor-fold>    