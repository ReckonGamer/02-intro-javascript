
// Funciones en JS

/* const saludar = function(nombre)  {
    return `Hola, ${nombre} `;
} */

const saludar2 = (nombre) => { // Normal function to return a name.
    return `Hola, ${nombre} `;
}

const saludar3 = (nombre) =>  `Hola, ${nombre} `; // Arrow function that returns a name.

const saludar4 = () =>  `Hola Mundo `; // Arrow function that returns a text.

//console.log(saludar("Pau"));

console.log(saludar2("Pau"));
console.log(saludar3("Ana"));
console.log(saludar4());

const getUser = () => ( { uid: "ABC123", username: nombre } ); // We will create an arrow function, that will return an object.

const user = getUser(); // We pass the function to a new variable.
console.log( user );

// Tarea

// 1. Transformen a una función de flecha
// 2. Tiene que retornar un objeto implicito

const  getUsuarioActivo = (nombre) => ( { uid: "ABC567", username: nombre } );  // We will create a new arrow function.

const usuarioActivo = getUsuarioActivo('Pau');
console.log(usuarioActivo);