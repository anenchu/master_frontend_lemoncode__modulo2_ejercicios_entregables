console.log("EJERCICIO 4 - Read Books");

//Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. 
// Un libro es un objeto con title como string y isRead como booleano. 
// En caso de no existir el libro devolver false 

function isBookRead(books, titleToSearch) {
  return books.some(b => b.title === titleToSearch && b.isRead);
}

// Ejemplo
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

const getReadStatus = (titleToSearch) => isBookRead(books, titleToSearch) ? 'sí' : 'no';
const getReadMessage = (titleToSearch) => `El libro ${titleToSearch} ${getReadStatus(titleToSearch)} ha sido leído.` 

console.log(getReadMessage("Harry Potter y la piedra filosofal"));
console.log(getReadMessage("Canción de hielo y fuego"));
console.log(getReadMessage("Devastación"));

console.log("**********************************************");