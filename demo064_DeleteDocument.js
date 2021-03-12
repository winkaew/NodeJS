const mongodb= require('mongodb')

const MongoClient= mongodb.MongoClient
const url = "mongodb://localhost:27017/"

MongoClient.connect(url, {useUnifiedTopology: true}, function(error, db) {
    if (error) throw error

    var dbo = db.db("myProductDB")
    var mydata = { course: 'Angular' }

    dbo.collection("products").deleteOne(mydata, function(error, obj) {
      if (error) throw error
      console.log("Delete Success!!")
      db.close()
    })
  })