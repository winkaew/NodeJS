const mongodb= require('mongodb')

const MongoClient= mongodb.MongoClient
const url = "mongodb://localhost:27017/myProductDB"

MongoClient.connect(url, {useUnifiedTopology: true}, 
  function(error, db) {

  if (error) throw error
  console.log("Create Database Success!!")
  db.close()
})
