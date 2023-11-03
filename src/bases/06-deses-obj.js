
// Desestructuración 
// Asignación Desestructurante

const persona = { // Object with strings and a number.
    nombre: "Pau",
    edad: 23,
    clave: "Informático",
    rango: "Soldado"
}

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(apellido);
// console.log(clave);


const useContext = ({ nombre, clave, edad, rango = "Informático" }) => { 
    
    // console.log(nombre, apellido, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const { nombreClave, anios, latlng: {lat, lng} } = useContext(persona); // We can change the info from the object with this.

console.log( nombreClave, anios );
console.log(lat, lng);