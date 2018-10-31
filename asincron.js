let fs = require ( 'fs') ;
let data = fs.readFile ( '/etc/passwd', 'utf8', (err, datos) => {
	if (err) throw err;
	console.log(datos);
});
console.log ( ' Fin del programa ') ;
