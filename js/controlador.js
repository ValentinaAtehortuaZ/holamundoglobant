// IMPORTACION DE ELEMENTOS


import{llenarTienda} from "./llenarTienda.js"

import{ampliarInfoProducto} from "./ampliarInfoProducto.js"


// llamo a la funcion llenarTienda

llenarTienda()


// Llamar la funcion ampliar info productos

let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalInfoProducto'))

let listaProductos=document.getElementById("fila")
listaProductos.addEventListener("click",function(event){

    ampliarInfoProducto(event)
    modalInfoProducto.show()
   
})