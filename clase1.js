let nombre = 'esteban';
let edad = 31;
let antiguedadItba=3.25;
let activo=true;

console.log(typeof(nombre)); //es como el print

/*
*comentario multilinea
*/

const hola = 1; //ya no puedo cambiarle el valor 

//en py no se puede sumar string y numero, pero aca si
console.log(nombre+edad)

//Tener en cuenta 
let a = '11';
let b = 1;
console.log(a-b) //con + concatena y con - resuelve

//ARRAY (Arreglo) > Vector (LISTA)
//Hay posicion 0
//               0         1         2
let colores = ['rojo' , 'verde' , 'azul' ];
console.log(colores[1])
//INDICE = longitud - 1
console.log(colores[4])
colores[0] = 'negro'
console.log(colores)

const NUMEROS = [1,2,3,4,5]; //Por convencion se escriben en mayuscula
NUMEROS[0] = 'Papas Fritas'
console.log(NUMEROS) //Los arrays se escriben con constantes y luego se modifican (temas tecnicos)
NUMEROS.push(6)
console.log(NUMEROS)

//python: diccionario - javascript: objeto
let profesor ={
    nombre: 'Esteban',
    edad: 31,
    facha: true,
    altura: 1.78,
    cumplirAño : function(){
        this.edad = this.edad + 1
    },
}

profesor.cumplirAño()
console.log(profesor.edad) // acceder a una clave: profesor.edad

// POO OOP prograacion orientada a objetos: JAVA/C++

//Array : [] - objetos {}

//Array de objetos Literales
const usuarios = [{nombre:'Felipe'},{nombre:'Phillip',edad:20},{nombre:"franco"}]
console.log(usuarios[1].edad)

//Operadores
//Matematicos

// + sumar o concatenar
// - restar
// * multiplicar
// ** potencia
// / divido (cociente)
// % dividir(resto)

//Logicos
// == debil (compara el valor)
// === estricta (compara el valor y el tipo de dato)
console.log(11=='11')
console.log(11==='11')
// != desigualdad debil
// !== desigualdad estricta
// >= mayor igual
// > mayor
// < menor
// <= menor o igual
// ++ incremento
// -- decremento
//a = a+b 
//a += b

//parseo de datos
let cualquiera = '11.6'
let cualquieraNumero = parseInt(cualquiera)
console.log(cualquieraNumero)
let cualquieraNumeroFloat = parseFloat(cualquiera)
console.log(cualquieraNumeroFloat)
//let cualquieraNumeroTexto =

//NaN NOT A NUMBER

//thurty y flasy

console.log('perro'&&'gato') //imprime el ultimo valor que evaluo
console.log('perro'||'gato') //imprime el primer valor pq no se necesita seguir cuando el primero ya es verdadero