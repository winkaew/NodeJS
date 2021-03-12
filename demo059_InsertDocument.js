const mongodb= require('mongodb')

const MongoClient= mongodb.MongoClient
const url = "mongodb://localhost:27017/"

MongoClient.connect(url, {useUnifiedTopology: true} ,function(error, db) {
  if (error) throw error
  
  var dbo = db.db("myProductDB")
  var myobj = { code: "DEV-001", course: "NodeJS Programming" }
  
  dbo.collection("products").insertOne(myobj, function(error, res) {
    if (error) throw error
    console.log("Insert Success!!")
    db.close()
  })
})