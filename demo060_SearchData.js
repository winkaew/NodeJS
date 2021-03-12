const mongodb= require('mongodb')

const MongoClient= mongodb.MongoClient
const url = "mongodb://localhost:27017/"

MongoClient.connect(url, {useUnifiedTopology: true}, function(error, db) {
    if (error) throw error
    var dbo = db.db("myProductDB")
    
    dbo.collection("products").findOne({}, function(error, result) {
      if (error) throw error
      console.log(result.code)
      console.log(result.course)
      db.close()
    })
  })