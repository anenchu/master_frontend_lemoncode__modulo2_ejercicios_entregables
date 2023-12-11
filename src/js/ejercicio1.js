console.log("EJERCICIO 1 - Array operations");

const testingArray = ["Eva", "Juan", "Pepe"];

// 1. Función Head
console.log("1. Función Head");
//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
const head = ([firstElement]) => firstElement;
console.log(`El primer elemento del array con valores ${JSON.stringify(testingArray)} es: ${JSON.stringify(head(testingArray))}`);

// 2. Función Tail
console.log("2. Función Tail");
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
const tail = ([, ...result]) => result;
console.log(`El resultado de tomar todos los valores menos el primer elemento del array con valores ${JSON.stringify(testingArray)} es: ${JSON.stringify(tail(testingArray))}`);

// 3. Función Init
console.log("2. Función Init");
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
const init = (array) => array.toSpliced(array.length - 1, 1);
console.log(`El resultado de tomar todos los valores menos el último elemento del array con valores ${JSON.stringify(testingArray)} es: ${JSON.stringify(init(testingArray))}`);

// 4. Función Last
console.log("2. Función Last");
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = (array) => array[array.length - 1];
console.log(`El resultado de tomar el último elemento del array con valores ${JSON.stringify(testingArray)} es: ${JSON.stringify(last(testingArray))}`);

console.log("**********************************************");
