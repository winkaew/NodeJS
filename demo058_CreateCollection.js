const mongodb= require('mongodb')

const MongoClient= mongodb.MongoClient
const url = "mongodb://localhost:27017/"

MongoClient.connect(url, {useUnifiedTopology: true},function(error, db) {
  if (error) throw error
  var dbo = db.db("myProductDB")

  dbo.createCollection("products", function(error, res) {
    if (error) throw error;
    console.log("Create Collection Success!!");
    db.close();
  });
});