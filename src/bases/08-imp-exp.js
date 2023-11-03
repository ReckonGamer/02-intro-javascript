// import { heroes } from './data/heroes'
// import { heroes } from "./data/heroes"
//import heroes, { owners } from '../data/heroes';

import heroes from "../data/heroes"; // We import the heroes from another document.

// console.log(owners);

export const getHeroeById = (id) => heroes.find( heroe => heroe.id === id ); // We will search the id from the heroes.

//  console.log( getHeroeById(2) );

// find?, filter

export const getHeroesByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner ); // We will search the owner from the heroes.

// console.log(getHeroesByOwner("Marvel") );