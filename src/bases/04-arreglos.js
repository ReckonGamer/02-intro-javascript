
// Arreglos en JS
// const arreglo = new Array
const arreglo = [1,2,3,4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

let arreglo2 = [...arreglo, 5]; // We can duplicate the first array, and give him 5 more positions.

const arreglo3 = arreglo2.map(function(numero){ // Function to return all the numbers, from the second array, multiplied by 2.
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);