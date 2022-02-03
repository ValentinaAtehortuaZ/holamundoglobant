// IMPORTACION DE ELEMENTOS


import{llenarTienda} from "./llenarTienda.js"

import{ampliarInfoProducto} from "./ampliarInfoProducto.js"

import{agregarCarrito} from  "./agregarAlCarrito.js"

import{verCarrito} from "./vercarrito.js"

// VARIABLES GLOBALES DE LA TIENDA
let producto={}
let carrito=[]



// llamo a la funcion llenarTienda

llenarTienda()


// Llamar la funcion ampliar info productos

let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalInfoProducto'))

let listaProductos=document.getElementById("fila")
listaProductos.addEventListener("click",function(event){

    producto=ampliarInfoProducto(event)
    modalInfoProducto.show()
   
})


//Llamado a la funcion agregar al carrito
let botonAgregarCarrito=document.getElementById("botonAgregarCarrito")
botonAgregarCarrito.addEventListener("click",function() {

    let cantidadProducto=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidadProducto
    

    //Agrego el producto al carrito
    carrito.push(producto)
   

    //Oculto la modal de infoProducto
    modalInfoProducto.hide()


    // Llamar la función agregarCarrito
    agregarCarrito(carrito)

   cantidadProducto=document.getElementById("cantidadProducto").value=1
    

})


// Llamo a la funcion ver carrito
let botonVerCarrito=document.getElementById("botonCarrito")
let modalVerCarrito = new bootstrap.Modal(document.getElementById('modalVerCarrito'))
botonVerCarrito.addEventListener("click",function(){
    verCarrito(carrito)
    modalVerCarrito.show()
})


//detectar clic en el boton limpiar
let botonlimpiar=document.getElementById("botonlimpiar")
botonlimpiar.addEventListener("click",function(){


    let contenedorModal=document.getElementById("contenedorCarrito")
    contenedorModal.innerHTML=""
    carrito= []

    let pildora = document.getElementById("pildora")
    pildora.innerHTML=""
    pildora = []

    
    modalVerCarrito.hide()


})
