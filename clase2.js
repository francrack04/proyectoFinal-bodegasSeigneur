//funciones(expresada,declarada,flecha)

console.log(nombreDeLaFuncion(2, 2));
//puedo llamar a una funcion expresada antes de declararla
let nombre = "franco2"; // cada funcion tiene un scope donde las cosas son propias de esa funcion

//declarar una funcion EXPRERSADA
function nombreDeLaFuncion(parametro1, parametro2) {
  let nombre = "Franco";
  parametro1 = parametro1 + 1;
  return parametro1;
}

console.log(nombreDeLaFuncion(1, 2));

//declarar una funcion DECLARADA

//no se puede acceder a ellas
let expresada = function (a, b) {
  return a + b;
};

//declarar una funcion flecha
let sumar2 = (a, b) => a + b;
console.log(sumar2(4, 5));

//funciones ANONIMAS : funcione sque no tienen nombre

//estructura if, else if operador ternario, and y or

function IMC(altura, peso) {
  let formula = peso / altura ** 2;

  //COPIAR DESPUES
}

//console.log(IMC(1.8, 80));

//operador ternario
let edadMinima = 19
edadMinima < 18 ? console.log('no puede pasar') : console.log('si puede pasar');

//and y or
// and &&
//or ||

function montaniaRusa(altura,acompaniado){
    if(altura>1.70){
        return 'Puede pasar'
    }else if (altura < 1.70 || acompaniado == 'si'){
        return 'Puede pasar'
    }else if (altura < 1.70 && acompaniado == 'No'){
        return 'No puede pasar'
    }else{
        return 'error de programa'
    }

}

// Ejemplo de map()
const numsMap = [1, 2, 3, 4];
const squares = numsMap.map(num => num * num);
console.log('map():', squares); // [1, 4, 9, 16]

// Ejemplo de filter()
const numsFilter = [1, 2, 3, 4, 5];
const evens = numsFilter.filter(num => num % 2 === 0);
console.log('filter():', evens); // [2, 4]

// Ejemplo de reduce()
const numsReduce = [1, 2, 3, 4];
const sum = numsReduce.reduce((acc, num) => acc + num, 0);
console.log('reduce():', sum); // 10

// Ejemplo de forEach()
const numsForEach = [1, 2, 3, 4];
numsForEach.forEach(num => console.log('forEach():', num));
// Imprime:
// 1
// 2
// 3
// 4

// Ejemplo de find()
const numsFind = [1, 2, 3, 4];
const firstGreaterThanTwo = numsFind.find(num => num > 2);
console.log('find():', firstGreaterThanTwo); // 3

// Ejemplo de findIndex()
const numsFindIndex = [1, 2, 3, 4];
const index = numsFindIndex.findIndex(num => num > 2);
console.log('findIndex():', index); // 2

// Ejemplo de includes()
const numsIncludes = [1, 2, 3, 4];
const hasThree = numsIncludes.includes(3);
console.log('includes():', hasThree); // true

// Ejemplo de some()
const numsSome = [1, 2, 3, 4];
const hasGreaterThanThree = numsSome.some(num => num > 3);
console.log('some():', hasGreaterThanThree); // true

// Ejemplo de every()
const numsEvery = [1, 2, 3, 4];
const allPositive = numsEvery.every(num => num > 0);
console.log('every():', allPositive); // true

// Ejemplo de push()
const numsPush = [1, 2, 3, 4];
numsPush.push(5, 6);
console.log('push():', numsPush); // [1, 2, 3, 4, 5, 6]

// Ejemplo de pop()
const numsPop = [1, 2, 3, 4];
const last = numsPop.pop();
console.log('pop():', last); // 4
console.log('Array después de pop():', numsPop); // [1, 2, 3]

// Ejemplo de shift()
const numsShift = [1, 2, 3, 4];
const first = numsShift.shift();
console.log('shift():', first); // 1
console.log('Array después de shift():', numsShift); // [2, 3, 4]

// Ejemplo de unshift()
const numsUnshift = [1, 2, 3, 4];
numsUnshift.unshift(0, -1);
console.log('unshift():', numsUnshift); // [0, -1, 1, 2, 3, 4]

// Ejemplo de slice()
const numsSlice = [1, 2, 3, 4, 5];
const sliced = numsSlice.slice(1, 4);
console.log('slice():', sliced); // [2, 3, 4]

// Ejemplo de splice()
const numsSplice = [1, 2, 3, 4, 5];
numsSplice.splice(1, 2, 6, 7);
console.log('splice():', numsSplice); // [1, 6, 7, 4, 5]

// Ejemplo de concat()
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combined = nums1.concat(nums2);
console.log('concat():', combined); // [1, 2, 3, 4, 5, 6]

// Ejemplo de join()
const numsJoin = [1, 2, 3, 4];
const joined = numsJoin.join(', ');
console.log('join():', joined); // "1, 2, 3, 4"

// Ejemplo de reverse()
const numsReverse = [1, 2, 3, 4];
numsReverse.reverse();
console.log('reverse():', numsReverse); // [4, 3, 2, 1]

// Ejemplo de sort()
const numsSort = [4, 2, 3, 1];
numsSort.sort((a, b) => a - b);
console.log('sort():', numsSort); // [1, 2, 3, 4]

// Ejemplo de flat()
const nested = [1, [2, [3, 4]], 5];
const flatArray = nested.flat();
console.log('flat():', flatArray); // [1, 2, [3, 4], 5]

// Ejemplo de flatMap()
const numsFlatMap = [1, 2, 3];
const flatMapped = numsFlatMap.flatMap(num => [num, num * 2]);
console.log('flatMap():', flatMapped); // [1, 2, 2, 4, 3, 6]
