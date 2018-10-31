function suma (numero1, numero2) {
	setTimeout(function () {
		var resultado =  numero1 + numero2;
		return resultado;
	}, 1000);
}

var resultado = suma(5,7);

console.log(resultado);
