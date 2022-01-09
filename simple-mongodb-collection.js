var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err,database) {
    if (err) throw err;

    var dbo = database.db("mydb");
    dbo.createCollection("customers", function (err, res) {
        if (err) throw err;

        console.log("collection created");
        database.close();
    });
});