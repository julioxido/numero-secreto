// let titulo = document.querySelector(".titulo");
// titulo.innerHTML = "Numero Secreto";

// let parrafo = document.querySelector(".texto__parrafo");
// parrafo.innerHTML = "Indica un numero del 1 al 10";
let numeroSecreto = 0;
let intentos = 0;
let numeroMaxmo = 10;
let listaNumeroSorteados = [];

function asignarTextoElemento(elemento, texto) {
	let elementoHtml = document.querySelector(elemento);
	elementoHtml.innerHTML = texto;
	return;
}

function verificarIntento() {
	let numeroDeUsuario = Number(document.getElementById("valorUsuario").value);

	if (numeroDeUsuario == numeroSecreto) {
		asignarTextoElemento(
			"p",
			`Acertaste el numero en ${intentos} ${intentos === 1 ? "Vez" : "Veces"}`
		);
		limpiarCampo();
		document.querySelector("#reiniciar").removeAttribute("disabled");
	} else {
		if (numeroDeUsuario < numeroSecreto) {
			asignarTextoElemento("p", "El numero secreto es mayor");
		} else {
			asignarTextoElemento("p", "El numero secreto es menor");
		}
		intentos++;
		limpiarCampo();
	}
	return;
}

function limpiarCampo() {
	document.querySelector("#valorUsuario").value = "";
}
function generarNumeroSecreto() {
	let numeroGenerado = Math.floor(Math.random() * 10) + 1;

	if (listaNumeroSorteados.length == numeroMaxmo) {
		asignarTextoElemento("p", "Ya fueron sorteados todos los numeros posibles");
	} else {
		if (listaNumeroSorteados.includes(numeroGenerado)) {
			return generarNumeroSecreto();
		} else {
			listaNumeroSorteados.push(numeroGenerado);
			return numeroGenerado;
		}
	}
}
function reiniciarJuego() {
	//limpiar caja
	limpiarCampo();
	//indicar msj de intervalo de numeros
	valoresIniciales();
	//deshabilitar el btn nuevo juego
	document.querySelector("#reiniciar").setAttribute("disabled", true);
}

function valoresIniciales() {
	asignarTextoElemento("h1", "Numero Secreto");
	asignarTextoElemento("p", "Indica un numero del 1 al 10");
	//generar el numero aleatorio
	numeroSecreto = generarNumeroSecreto();
	console.log(numeroSecreto);
	//inicializar el numero de intentos
	intentos = 1;
}
valoresIniciales();
