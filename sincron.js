let fs = require ( 'fs') ;
let data = fs.readFile ( '/etc/passwd') ;
console.log ( data ) ; // = > origina undefined
console.log ( ' Fin del programa ') ;
