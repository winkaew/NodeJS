const mongodb= require('mongodb')

const MongoClient= mongodb.MongoClient
const url = "mongodb://localhost:27017/"


MongoClient.connect(url, {useUnifiedTopology: true} , function(error, db) {
    if (error) throw error
    var dbo = db.db("myProductDB")
    var mydata = { course: "NodeJS Programming" }
    var newdata = { $set: {code: "DEV-001", course: "React" } }
    
    dbo.collection("products").updateOne(mydata, newdata, function(error, res) {
      if (error) throw error
      console.log("Update Sucess!!")
      db.close()
    })
  })