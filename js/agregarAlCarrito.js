export function  agregarCarrito(carrito){
   
//crear una referencia a la pildora del carrito

let pildora=document.getElementById("pildora")

pildora.classList.remove("invisible")


// Recorrer el arreglo y sacarle fotocopia a la informacion que hay por dentro

let cantidad=0


carrito.forEach(function (producto) {

   
   cantidad=cantidad+Number(producto.cantidad)


})

pildora.textContent=cantidad
pildora.classList.remove("invisible")


}