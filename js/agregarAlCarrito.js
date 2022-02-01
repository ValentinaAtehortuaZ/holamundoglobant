export function  agregarCarrito(carrito){
   
//crear una referencia a la pildora del carrito

let pildora=document.getElementById("pildora")

pildora.classList.remove("invisible")


// Recorrer el arreglo y sacarle fotocopia a la informacion que hay por dentro

let contador=0
let total = 0;

carrito.forEach(function (producto) {

   
   contador=contador+1

   console.log(contador)
   


})



}