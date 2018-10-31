const menu = require('simple-menu');
const BD   = require('./db');

menu.reset();
 
menu.addText('Main Menu');
menu.addBreak('-', 60);
 
menu.addOption('Listar email' , () => {
  BD.obtenerTodosDocumentos((resultado) => {
	  for (let persona of resultado) {
	  	console.log(persona.email);
	  }
  }); 
  //console.log('Hello World');
});
 
menu.addBreak('-', 60);
menu.addQuit();
 
menu.init('What would you like to do?');
