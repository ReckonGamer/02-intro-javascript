
// Template String

const nombre = "Pau";
const apellido = "Robles";

// const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `${nombre} ${apellido}`; // We concatenate both variables.

console.log( nombreCompleto );

function getSaludo(nombre) { // Function with a parameter, that we will return.
    return "Hola" + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);