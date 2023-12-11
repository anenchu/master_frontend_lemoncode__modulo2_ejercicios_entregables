console.log("EJERCICIO 3 - Clone Merge");

const testingObject = { name: "Juan", surname: "Pérez", age: 35};

// 1. Clone
console.log("1. Clone");
//Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
function clone(source) {
    return {...source};
}

// Ejemplo
console.log(`El resultado de clonar el objeto con valores ${JSON.stringify(testingObject)} es: ${JSON.stringify(clone(testingObject))}`);


// 2. Merge
console.log("2. Merge");
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades 
// con el mismo nombre, source sobreescribe a target.
function merge(source, target) {
    return {...clone(target), ...clone(source)};
}

// Ejemplo
const sourceObject = { name: "Maria", surname: "Ibañez", country: "SPA" };
const targetObject = { name: "Luisa", age: 31, married: true };
console.log(`El resultado de mergear el objeto con valores ${JSON.stringify(sourceObject)} con el objeto con valores ${JSON.stringify(targetObject)} es: ${JSON.stringify(merge(sourceObject, targetObject))}`);

console.log("**********************************************");