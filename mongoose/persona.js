var mongoose = require ('mongoose');
var Schema = mongoose.Schema ;

var personaEsquema = new Schema ( {
	_id       : Number,
	firstName : String,
	lastName  : String,
	 email : {
                type : String,
                validate : {
                        validator: function(v) {
                                return /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(v);
                        },
                        message : props => `${props.value} is not a valid email!`
                }
        },
	gender    : {
			type: String,
			enum: ['Male','Female']
		    },
	age       : { 
			type : Number,
			min  : 18,
			max  : 65
		    },
	date      : {
			type    : Date,
			default : Date.now	
		    }

}, { versionKey: false });

var Persona = mongoose.model ( 'Personas' , personaEsquema );
module.exports = Persona;




