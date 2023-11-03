// Desestructuración de arreglos

const personajes = ["Gokú", "Vegetta", "Trunks"]; // Array with strings.

const [ , , p3 ] = personajes;

console.log( p3 );

const retornaArreglo = () => { // We return the array.
    return ["ABC", 123];
}

const [letras, nmeros] = retornaArreglo();
console.log( letras, nmeros );

// Tarea

// 1. el primer valor del arr se llamará nombre
// 1.  se llamará setNombre

const useState = (valor) => { // We will make a function to return a value.
    return [ valor, ()=> ( console.log ("Hola Mundo") ) ];
} 

const arr = useState("Gokú"); 

const [ nombre, setNombre ] = useState("Gokú");

console.log( nombre );

setNombre();