var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var BD = {};

BD.obtenerTodosDocumentos = function (callback) {MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  var query = { };
  dbo.collection("personas").find(query).toArray(function(err, result) {
    if (err) throw err;
    callback(result);	  
    //console.log(result);
    db.close();
  });
 }); 
}

module.exports = BD;
