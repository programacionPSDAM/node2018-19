var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var BD = {};

BD.obtenerTodosDocumentos = function (callback) {MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  var query = { };
  dbo.collection("personas").find(query).toArray(function(err, result) {
    if (err) throw err;
    callback(result);	  
    db.close();
  });
 }); 
}

BD.obtenerDocumentosPorEdad = function (edad, callback) {MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  var query = {age : edad };
  dbo.collection("personas").find(query).toArray(function(err, result) {
    if (err) throw err;
    callback(err,result);	  
    db.close();
  });
 }); 
}

BD.insertarDocumento =  function (documento) { MongoClient.connect(url,{ useNewUrlParser: true } , function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
 // var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("personas").insertOne(documento, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}); 

}


module.exports = BD;
