var Persona = require ( './persona' );
var mongoose =  require ( 'mongoose' );

var DB = {};


DB.insertarPersona = function (newPersona) {mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true },function (err) {
	if (err) throw err;
	newPersona.save ( function ( err ) {
		if ( err ) throw err ;
		console.log ( " Usuario creado " ) ;
		mongoose.connection.close();
	}) ;

   });
}
DB.borrarPersonaPorEmail = function (email) {mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true },function (err) {
	if (err) throw err;
	Persona.deleteOne ({email : email}, function ( err ) {
		if ( err ) throw err ;
		console.log ( " Usuario borrado " ) ;
		mongoose.connection.close();
	}) ;
  });
}
DB.buscarPorEmail = function (email, callback) {mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true },function (err) {
	if (err) throw err;
	Persona.find ({email : email}, function ( err, persona ) {
		if ( err ) throw err ;
		callback(err, persona);
		mongoose.connection.close();
	}) ;
  });
}

DB.buscarTodos = function (callback) {mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true },function (err) {
	if (err) throw err;
	Persona.find ({}, function ( err, personas ) {
		if ( err ) throw err ;
	//	console.log(typeof personas);
		callback(err, personas);
		mongoose.connection.close();
	}) ;
  });
}
DB.actualizarEdad = function (email, age) {mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true },function (err) {
	if (err) throw err;
	Persona.updateOne ({email : email},{age: age}, function ( err ,res) {
		if ( err ) throw err ;
		console.log ( " Nº usuarios actualizados " +  res.modifiedCount) ;
		mongoose.connection.close();
	}) ;
  });
}

module.exports=DB;
