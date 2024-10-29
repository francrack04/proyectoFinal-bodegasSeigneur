//Ejercicio 1: Sistema de Gestión de Tareas
//1. Crea un sistema de gestión de tareas donde se puedan agregar, eliminar y modificar tareas
//2. Las tareas se almacenarán en un array de objetos, donde cada objeto representa una tarea con los siguientes atributos:
//- `id` (número único)
//- `nombre` (string)
//- `completado` (booleano)
//3. Verifica si una tarea existe y si está completa.
//4. El sistema debe tener funciones para agregar tareas, marcar tareas como completadas, y eliminar tareas.
//5. Desarrollar una función para mostrar todas las tareas, y que se pueda filtrar si están completadas o no.
//6. Convierte el array de objetos a JSON utilizando `JSON.stringify`, y luego conviértelo de vuelta a un objeto con `JSON.parse`.

/*

const tareas =[
    {id:0,nombre:'Hacer la cama', completado:true}
]

function almacenarTareas(id_agg,tarea_agg,completado_agg){
    nuevaTarea = {id:id_agg,nombre:tarea_agg,completado:completado_agg}

    //Verificar si ya se encuentra la tarea

    const verifiarTarea = (id_agg) => {
        for(i=0;i<tareas.length;i++){
            if(tareas[i].id == id_agg){
                return true
            }
    
        } 
    }

    if(verifiarTarea(id_agg)){
        return console.log('La tarea ya se encuentra en la lista')
    }else{
        tareas.push(nuevaTarea)
    }

}

function eliminarTarea(id_agg){
    tareas.splice(id_agg,1)
}

almacenarTareas(1,'Hacer el desayuno', true)
almacenarTareas(2,'Lavar dientes', false)
almacenarTareas(3,'Tomar el subte', false)

console.log(tareas)

almacenarTareas(3,'Tomar el subte', false) //Verifica que funciona el punto 3
console.log(tareas)

eliminarTarea(3)
console.log(tareas)

function marcarTareaCompletada(id){
    tareas[id].completado = true
}

marcarTareaCompletada(2)
console.log(tareas)

function mostrarTareas() {
    let tareasCompletadas = []; 
    let tareasIncompletas = []
    
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].completado === true) {
            tareasCompletadas.push(tareas[i].nombre);
        }else{
            tareasIncompletas.push(tareas[i].nombre)
        }
    }
    
    console.log('Tareas Completas: ' + tareasCompletadas)
    console.log('Tareas Incompletas: ' + tareasIncompletas)

}

almacenarTareas(3,'Tomar el subte', false)
mostrarTareas();

console.log("-----------------------------------")
console.log(tareas)
let tareasJSONEADO = JSON.stringify(tareas)
console.log(tareasJSONEADO)
let tareasPARSEADO = JSON.parse(tareasJSONEADO)
console.log(tareasPARSEADO)

*/

/*
Ejercicio 2: Simulación de Carrito de Compras
Instrucciones:
1. Crea un carrito de compras utilizando arrays y objetos donde cada producto tenga las propiedades:
   - `id`
   - `nombre`
   - `precio`
   - `cantidad`
2. Implementa las siguientes funciones:
   - `agregarProducto(id, cantidad)`: Añade productos al carrito.
   - `removerProducto(id)`: Elimina productos del carrito.
   - `totalCarrito()`: Calcula el total de la compra.
   - `listarProductos()`: Muestra todos los productos del carrito.
3.Verificar si el carrito tiene productos y mostrar un mensaje si está vacío.
*/
/*
const carritoDeCompras = [
    {id:0,nombre:'banana',precio:200,cantidad:2},
    {id:1,nombre:'manzana',precio:400,cantidad:3},
    {id:2,nombre:'pera',precio:600,cantidad:0}

]

//Funcion para agregar productos
function agregarProducto(id,cantidad){
    carritoDeCompras[id].cantidad = carritoDeCompras[id].cantidad + cantidad
}

agregarProducto(1,3)
console.log(carritoDeCompras)

//Funcion para remover productos

function removerProducto(id){
    carritoDeCompras.splice(id,1)
}

//Funcion para calcular el total de la compra

removerProducto(2)
console.log(carritoDeCompras)

function totalCarrito(){
    suma = 0
    for(i=0;i<carritoDeCompras.length;i++){
        suma = suma + (carritoDeCompras[i].cantidad) * (carritoDeCompras[i].precio)
    }
    console.log('El precio total por su carrito es: $' + suma)
}

totalCarrito() 

//Funcion para mostrar todos los productos del carrito

function listarProductos(){
    console.log('El carrito contiene los siguientes productos: ')
    console.log()
    for(i=0;i<carritoDeCompras.length;i++){
        console.log('Hay ' + carritoDeCompras[i].cantidad + ' de ' + carritoDeCompras[i].nombre)
    }

}

listarProductos()

//Verificar si el carrito esta vacio

carritoVacio()

//Voy  a vaciar el carrito


removerProducto(0)
removerProducto(0)

function carritoVacio() {
    if (carritoDeCompras.length === 0) {
        console.log('El carrito está vacío');
    } else {
        console.log('El carrito tiene productos');
    }
}

carritoVacio()
*/

/*

Instrucciones:
1. Implementa un sistema de autenticación simple que almacene usuarios en un array de objetos. Cada usuario debe tener:
   - `id`
   - `nombre`
   - `password`
   - `email`
2. Implementa funciones para:
   - `registrarUsuario(nombre, email, password)`
   - `iniciarSesion(email, password)`
3. Utiliza operadores lógicos para verificar si un usuario ya existe al registrar y si el email y la contraseña coinciden al iniciar sesión.
4. Implementa manejo de `Falsy` y `Truthy` valores para comprobar si las entradas son válidas (es decir, que no sean `null`, `undefined`, etc.).
5.Validar la fortaleza del `password` (debe tener al menos 6 caracteres y un número).
6. Almacena los usuarios en localStorage con `JSON.stringify` y recupera con `JSON.parse` al iniciar sesión.


*/

//Creo el array de objetos que contenga a los usuarios

usuarios = [
    {id: 0,nombre:'Franco', password: '1234', email: 'francoseigenur@hotmail.com.ar'},
    {id: 1,nombre:'Tomas', password: '5678', email: 'tomasseigenur@hotmail.com.ar'},
    {id: 2,nombre:'Lourdes', password: '0123', email: 'lourdesseigenur@hotmail.com.ar'}

]



//Funcion para registrar usuario

function registrarUsuario(nombre_agg,password_agg,email_agg){

    // Comprobación de valores falsy para entradas no válidas
    if (!nombre_agg || !password_agg || !email_agg) {
        console.log('Error: Todos los campos son obligatorios');
        return;
    }

    //Validar la fortaleza de la contraseña

    if (password_agg.length < 6) {
        console.log('Error: La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    const contieneNumero = password_agg.split('').find(char => !isNaN(char) && char !== ' ');
    if (!contieneNumero) {
        console.log('Error: La contraseña debe contener al menos un número.');
        return;
    }



    //Verificar si el usuario ya existe solo con mail o nombre

    for(i=0;i < usuarios.length;i++){
        if(email_agg == usuarios[i].email || nombre_agg == usuarios[i].nombre){
            console.log('El usuario ya existe')
            return
        }
    }
    usuario_agg={id: usuarios.length , nombre: nombre_agg,password: password_agg,email: email_agg}
    usuarios.push(usuario_agg)
    console.log('Usuario registrado correctamente.')


}

registrarUsuario('Lara','abc56789','laraseigenur@hotmail.com.ar')
registrarUsuario('Vicky','abc56789','vicgiles@hotmail.com.ar')


function iniciarSesion(password_agg,email_agg){

    if ( !password_agg || !email_agg) {
        console.log('Error: Todos los campos son obligatorios');
        return;
    }

    for(i=0;i < usuarios.length;i++){
        if(email_agg == usuarios[i].email && password_agg == usuarios[i].password){
            console.log('Bienvenido.')
            return
        }
    }

    console.log('Contraseña o Email incorrecto.')

}

iniciarSesion('abc56789','vicgiles@hotmail.com.ar')


//console.log(usuarios)

