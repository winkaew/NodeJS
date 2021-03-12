const mongodb= require('mongodb')

const MongoClient= mongodb.MongoClient
const url = "mongodb://localhost:27017/"

MongoClient.connect(url, {useUnifiedTopology: true}, function(error, db) {
    if (error) throw error
    var dbo = db.db("myProductDB")
    
    dbo.collection("products").find().limit(3).toArray(function(error, result) {
      if (error) throw error
      console.log(result)
      db.close()
    })
  })