//Definicion de variables
// Declara variables con `let` y `const` para almacenar tu nombre, edad y si eres estudiante. Imprime cada una en la consola.

const nombre = 'Franco'
let edad = 20
let estudiante = 'SI'

console.log('Soy ' + nombre + ' y tengo ' + edad + '. Estudiante? ' + estudiante )

// Operaciones matematicas:  Declara una variable para almacenar un string, un número, un booleano, un array y un objeto.
// Imprime el tipo de cada variable usando `typeof`.

let str = 'str'
let num = 12
let bool = true
let array = []
let objeto ={
    nombre: 'Franco',
    edad: 20,
}

console.log(typeof(str))
console.log(typeof(num))
console.log(typeof(bool))
console.log(typeof(array)) //preguntar que pasa
console.log(typeof(objeto))

//Arrays Basicos: Crea un array con 5 elementos (pueden ser números o strings). Accede al primer y último elemento.

let numeros = [1,2,3,4,5,6]
console.log(numeros[0])
console.log(numeros[5])

//Array de objetos: Crea un array de 3 objetos, donde cada objeto represente un libro con propiedades 
//como título, autor y año de publicación. Imprime el título del primer libro.

let libros = [
    {
      título: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      año: 1967
    },
    {
      título: "1984",
      autor: "George Orwell",
      año: 1949
    },
    {
      título: "Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
      año: 1605
    }
  ];

console.log(libros[0].título);

//Operadores Logicos:  Declara dos variables booleanas, y usa operadores lógicos (`&&`, `||`, `!`) para combinar
// sus valores e imprimir el resultado.

let verdadero = true
let falso = false

console.log(verdadero && falso)
console.log(verdadero || falso)
console.log(verdadero != falso)

//Comparaciones: Declara dos variables numéricas e imprime si el primer número es mayor que el segundo, si 
// son iguales o si el segundo es mayor.

let numero1 = 20
let numero2 = 23

console.log(numero1 < numero2)
console.log(numero1 > numero2)
console.log(numero1 == numero2)