//crear el menu
/*var newPersona = Persona ({
	_id : 1013,
	firstName : 'nombre en mongoose' ,
	lastName : 'apellidos en mongoose' ,
	email : 'email@dfkñlkñfd.com',
	gender : 'Female',
	age : 18
	//date : new Date()
});*/
const menu = require('simple-menu');
const BD   = require('./db');
const readline = require('readline-sync');
const Persona = require('./persona');

menu.reset();
 
menu.addText('Main Menu');
menu.addBreak('-', 60);
 
menu.addOption('Listar todos' , () => {
  BD.buscarTodos((err, resultado) => {
      if (err) throw err;
	  for (let persona of resultado) {
	  	console.log(persona.firstName);
	  }
  }); 
});

menu.addOption('Listar por email' , () => {
  const email = readline.question("Introduce email  ");	
  BD.buscarPorEmail(email , (err, persona) => {
	  if (err) throw err;
	 for (let persona of resultado) {
	  	console.log(persona);
	  }
  }); 
});

menu.addOption('Insertar usario' , () => {
 const id = readline.question("Introduce id  ");	
 const firstName = readline.question("Introduce nombre  ");	
 const lastName = readline.question("Introduce apellidos  ");	
 const email = readline.question("Introduce email  ");	
 const gender = readline.question("Introduce sexo  ");	
 const age = readline.question("Introduce edad  ");	
 const persona = new Persona (
    {_id : id * 1, 
      firstName : firstName ,
      lastName : lastName, 
      email : email,
      gender: gender,
      age : age * 1});	
  BD.insertarPersona(persona);
});

menu.addOption('Borrar por email' , () => {
    const email = readline.question("Introduce email  ");	
    BD.borrarPersonaPorEmail( email, (err) => {
        if (err) throw err;
    }); 
  });

  menu.addOption('Actualizar por edad' , () => {
    const email = readline.question("Introduce email  ");	
    const age = readline.question("Introduce edad  ");	

    BD.actualizarEdad( email, age,  (err) => {
        if (err) throw err;
    }); 
  });
 
menu.addBreak('-', 60);
menu.addQuit();
 
menu.init('What would you like to do?');