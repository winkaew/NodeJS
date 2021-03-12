const mongodb= require('mongodb')

const MongoClient= mongodb.MongoClient
const url = "mongodb://localhost:27017/"

MongoClient.connect(url, {useUnifiedTopology: true}, function(error, db) {
    if (error) throw error
    var dbo = db.db("myProductDB")

    dbo.collection("products").drop(function(error, delOK) {
      if (error) throw error
      if (delOK) console.log("Collection Delete Success!!")
      db.close()
    })
  })