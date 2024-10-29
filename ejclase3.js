//Ejercicio 1: Ciclo For
//Escribe un ciclo `for` que imprima los números del 1 al 10 en la consola.

for(let i = 1; i<11; i++){
    console.log(i)
}

//Ejercicio 2: Iterar un Array
//Crea un array con los nombres de 5 frutas y usa un ciclo `for` para imprimir cada uno.

const frutas = ['Banana','Manzana','Naranja','Mandarina','Uva']
for(let i = 0; i<frutas.length; i++){
    console.log(frutas[i])
}

//Ejercicio 3: Métodos de Arrays
//Utiliza el método `map` para crear un nuevo array que contenga la longitud de cada string en un array de nombres.
//Usa el método `filter` para crear un nuevo array que contenga solo los números mayores a 10 de un array dado.
//Emplea el método `reduce` para calcular la suma de todos los números en un array.

const nombres = ['Ana', 'Luis', 'Roberto', 'Carla'];
const longitudes = nombres.map(nombre => nombre.length);
console.log(longitudes); // Output: [3, 4, 7, 5]


const numeros = [5, 12, 8, 21, 3, 15];
const mayoresQueDiez = numeros.filter(numero => numero > 10);
console.log(mayoresQueDiez); // Output: [12, 21, 15]

const numerosParaSuma = [1, 2, 3, 4, 5];
const suma = numerosParaSuma.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // Output: 15

