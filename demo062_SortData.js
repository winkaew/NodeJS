const mongodb= require('mongodb')

const MongoClient= mongodb.MongoClient
const url = "mongodb://localhost:27017/"

MongoClient.connect(url, {useUnifiedTopology: true}, function(error, db) {
    if (error) throw error
    var dbo = db.db("myProductDB")
    var sortdata = { course: 1 }
    // 1 น้อยไปมาก , A-Z
    // -1 มากไปน้อย , Z-A
    
    dbo.collection("products").find().sort(sortdata).toArray(function(error, result) {
      if (error) throw error
      console.log(result)
      db.close()
    })
  })