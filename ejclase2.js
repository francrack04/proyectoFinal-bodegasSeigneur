// Funciones, Estructura If, Else If, Operador Ternario, And y Or

//Funciones declaradas: Escribe una función que tome dos números como argumentos y retorne su suma. 
// Llama a la función con diferentes pares de números e imprime el resultado.

function suma(num1,num2){
    suma = num1 + num2
    console.log('La suma de ' + num1 + ' y ' + num2 + ' es ' +suma )
}

console.log(suma(1,2))

//Funcion expresada:  Crea una función expresada que reciba un array de números y retorne la suma de todos sus elementos.

const NUMEROS = [1,2,3,4,5,6]

const sumaArray = function(arrayARecorrer) {
    let suma = 0;  
    for (let i = 0; i < arrayARecorrer.length; i++) {
        suma += arrayARecorrer[i];  // Suma el valor actual al acumulador
    }
    return suma;  // Retorna la suma total
};

console.log(sumaArray(NUMEROS))

//Ejercicio 3: Función Flecha
//Convierte la función del ejercicio anterior a una función de flecha.

let sumaArray2 = array_prueba => {
    let suma = 0;  
    for (let i = 0; i < array_prueba.length; i++) {
        suma += array_prueba[i];  // Suma el valor actual al acumulador
    }
    return suma;
}

console.log(sumaArray2(NUMEROS))

//Ejercicio 4: Estructura If-Else
//Escribe una función que tome una edad como argumento y devuelva un mensaje que indique si la persona es un niño, adolescente, adulto o anciano.

function categoria(edad,edad_adolesc,edad_adulto,edad_anciano){
    if(edad<edad_adolesc){
        return "La persona es un niño"
    }else if(edad >= edad_adolesc && edad < edad_adulto){
        return "La persona es un adolescente"
    }else if(edad >= edad_adulto && edad < edad_anciano){
        return "La persona es un adulto"
    }else if(edad >= edad_anciano){
        return "La persona es un anciano"
    }
    
}

console.log(categoria(69,13,26,68))

//Ejercicio 5: Operador Ternario
//Reescribe la función anterior usando un operador ternario para determinar si la persona es mayor de edad o no.

let edad = 13
edad < 18 ? console.log('Es menor de edad') : console.log('Es mayor de edad');

//Ejercicio 6: Operadores And y Or
//Escribe una función que tome tres argumentos booleanos y retorne `true` si al menos uno de ellos es verdadero, o `false` si todos son falsos.


function EsOnoEs(par1,par2,par3){
    if(par1 == false && par2 == false && par3 == false){
        return false
    }else{
        return true
    }
}

console.log(EsOnoEs(false,false,false))