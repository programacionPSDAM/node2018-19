var mongoose = require ('mongoose');
var Schema = mongoose.Schema ;

var personaEsquema = new Schema ( {
	_id       : Number,
	firstName : String,
	lastName  : String,
	email     : String,
	gender    : String,
	age       : Number,
	date      : Date

});

var Persona = mongoose.model ( 'Personas' , personaEsquema );
module.exports = Persona;

//restricciones para edad entre 18 y 65
//fecha si no se pone que se ponga la fecha actual
//_v no aparezca
//género solo se válido Male o Famale
//validación del email con expresión regular


