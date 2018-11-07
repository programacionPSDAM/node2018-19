const menu = require('simple-menu');
const BD   = require('./db');
const readline = require('readline-sync');

menu.reset();
 
menu.addText('Main Menu');
menu.addBreak('-', 60);
 
menu.addOption('Listar email' , () => {
  BD.obtenerTodosDocumentos((resultado) => {
	  for (let persona of resultado) {
	  	console.log(persona.email);
	  }
  }); 
});

menu.addOption('Listar por edad' , () => {
  const age = readline.question("Introduce edad  ");	
  BD.obtenerDocumentosPorEdad(age * 1 , (err, resultado) => {
	  if (err) throw err;
	  for (let persona of resultado) {
	  	console.log(persona);
	  }
  }); 
});

menu.addOption('Insertar usario' , () => {
 // const id = readline.question("Introduce id  ");	
 // const firstName = readline.question("Introduce nombre  ");	
 // const lastName = readline.question("Introduce apellidos  ");	
 // const email = readline.question("Introduce email  ");	
 // const gender = readline.question("Introduce sexo  ");	
 // const age = readline.question("Introduce edad  ");	
 // persona = {_id : id * 1, firstName : firstName , lastName : lastName, email : email, gender: gender, age : age * 1, date: new Date()};	
	persona = {campoNoRegistrado : 'valor' };
  BD.insertarDocumento(persona);
});
 
menu.addBreak('-', 60);
menu.addQuit();
 
menu.init('What would you like to do?');
