var Persona = require ( './persona' );
var mongoose =  require ( 'mongoose' );

var newPersona = Persona ({
	_id : 1007,
	firstName : 'nombre en mongoose' ,
	lastName : 'apellidos en mongoose' ,
	email : 'email',
	gender : 'Male',
	age : 'iiiii21',
	date : new Date()
});

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true },function (err) {
	if (err) throw err;
	newPersona.save ( function ( err ) {
		if ( err ) throw err ;
		console.log ( " Usuario creado " ) ;
	}) ;
});

//como se cierra la conexión
//crearlo como módulo para trabajarlo en menu.js
