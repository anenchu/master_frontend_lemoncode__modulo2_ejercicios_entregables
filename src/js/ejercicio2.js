console.log("EJERCICIO 2 - Concat");

//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
const concat = (a, b) => [...a, ...b];

// Ejemplo
const array1 = ["Eva", "Juan", "Pepe"];
const array2 = [1, 2, 3, 4];
console.log(`El resultado de concatenar el array de valores ${JSON.stringify(array1)} con el array de valores ${JSON.stringify(array2)} es: ${JSON.stringify(concat(array1, array2))}`);

console.log("**********************************************");