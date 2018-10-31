function suma (numero1, numero2, manipulador) {
	setTimeout(function () {
		var resultado =  numero1 + numero2;
		manipulador(resultado);
	}, 1000);
}

suma(5,7, function(datos){
	console.log(datos);
});
