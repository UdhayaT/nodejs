var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    var myobj = {name: "USC", address:"Los Angeles"};
    var manyObj = [
        {name: "UCLA", address: "Los Angeles"},
        {name: "CIT", address: "Pasadena"},
        {name: "LMU", address: "Los Angeles"}
    ]
    var idObjs = [
        { _id: 101, name:"Earphones"},
        { _id: 102, name: "Laptops"}
    ]

    // Inserting a single document into a collection
    dbo.collection("customers").insertOne(myobj, function(err, res){
        if(err) throw err;
        console.log("Inserted one document");
        //db.close();
    });

    // Inserting multiple documents into a collection
    dbo.collection("customers").insertMany(manyObj, function(err, res){
        if(err) throw err;
        console.log("Inserted MANY documents. total:" + res.insertedCount);
    });

    // Inserting with specific IDs defined on documents
    dbo.collection("products").insertMany(idObjs, function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
    
});