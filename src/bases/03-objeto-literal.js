
// Objetos literales

const persona = { // This is an object with some variables.
    nombre: "Pau",
    apellido: "Robles",
    edad: 45,
    direccion: { // This is an object with some variables, inside another object.
        ciudad: "New York",
        zip: 55321321,
        latitud: 14.3232,
        longitud: 34.9233321
    }
};

// console.table(persona);

const persona2 = {...persona}; // We can duplicate the object to make a new one.
persona2.nombre = "Peter"; // Change the name from the new one.

console.log(persona);
console.log(persona2);