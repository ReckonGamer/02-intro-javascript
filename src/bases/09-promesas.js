
import { getHeroeById } from "./bases/08-imp-exp"; // Import the method from another document.

/* 
    const promesa = new Promise( (resolve, reject) => {
        setTimeout( () => {
            // Tarea
            //importen el 
            const heroe = getHeroeById(2);

            // resolve ( p1 );
            
            //reject("No se pudo encontrar el héroe");
        }, 2000);
    }); 
*/


// promesa.then( (heroe) => {
//     console.log("heroe", heroe);
// }).catch( err => console.warn(err));

const getHeroeByIdAsync = (id) => { // We will get the heroes id.
    const promesa = new Promise( (resolve, reject) => { // Make a petition to search it.
        setTimeout( () => { // When 2 seconds passed.
            // Tarea
            //importen el 
            const p1 = getHeroeById( id ); // Get the id for the first heroe.
            if(p1) { // If there is a heroe.
                resolve ( p1 ); 
            } else { // If there is not a heroe.
               reject("No se pudo encontrar el héroe"); 
            }            
        }, 2000);
    });
    return promesa; // We will make a return.
};

// If there is a second heroe, we will show it.
// If there's not, it will show a warn.

getHeroeByIdAsync(2).then(console.log).catch(console.warn); 
