// Funcion para lleanr dinamicamente la tienda

export function llenarTienda(){

let productos=[

    {nombre:" Hermione Granger Bag", precio:120000,foto:"../img/Productos/bolso.jpg",cantidad:0,descripcion:"Replica Hermione Granger Bag "},
    {nombre: "Platform Poster 9 3/4", precio: 70000,foto:"../img/Productos/anden.jpg",cantidad:0,descripcion:" Platform Poster Replica 9 3/4"},
    {nombre:"Hogwarts Goblet Cup", precio:130000,foto:"../img/Productos/copa1.jpg",cantidad:0,descripcion:" Hogwarts Goblet Cup"},
    {nombre:"Hermione Figure With Wand", precio: 90000,foto:"../img/Productos/hermione.jpg",cantidad:0,descripcion:"Hermione figure with wand"},
    {nombre:"Dragées Of All Flavors", precio:30000,foto:"../img/Productos/grageas.jpg",cantidad:0,descripcion:"Dragées of all flavors"},
    {nombre:"Marauder's Map", precio:200000,foto:"../img/Productos/mapa.jpg",cantidad:0,descripcion:"Marauder's Map"},
    {nombre:"Golden Snitch", precio:100000,foto:"../img/Productos/replica.jpg",cantidad:0,descripcion:"Golden snitch"},
    {nombre:"Sorting Hat", precio:150000,foto:"../img/Productos/sombrero.jpg",cantidad:0,descripcion:" Sorting Hat"},
    {nombre:" Rowena Ravenclaw Diadem ", precio:350000,foto:"../img/Productos/tiara.jpg",cantidad:0,descripcion:" Replica Rowena Ravenclaw Diadem "},
    {nombre: "Wands", precio:300000,foto:"../img/Productos/varitas.jpg",cantidad:0,descripcion:"Wands"},

    
]

// Rutina para recorrer el arreglo y crear las tarjetas de cada producto

// Crear una referencia a un elemento "PADRE" O "base" donde anclaremos  
let fila = document.getElementById("fila")

// Recorrer el arreglo y sacarle fotocopia a la informacion que hay por dentro

productos.forEach(function (producto) {

    // Creamos los elementos necesarios para pintar los productos (traversing)

    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let imagen = document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("h-60")
    imagen.classList.add("p-3")
    imagen.src = producto.foto

    let nombreProducto = document.createElement("h5")
    nombreProducto.classList.add("text-dark")
    nombreProducto.classList.add("fw-bold")
    nombreProducto.classList.add("text-center")
    nombreProducto.textContent = producto.nombre

    let descripcionProducto = document.createElement("h3")
    descripcionProducto.classList.add("invisible")
    descripcionProducto.classList.add("h6")
    descripcionProducto.classList.add("text-center")
    descripcionProducto.classList.add("text-muted")
    descripcionProducto.textContent = producto.descripcion

    let precioProducto = document.createElement("h4")
    precioProducto.classList.add("text-center")
    precioProducto.classList.add("text-danger")
    precioProducto.textContent = producto.precio
    precioProducto.textContent = "$" + producto.precio

    let botonProducto = document.createElement("button")
    botonProducto.classList.add("m-2")
    botonProducto.classList.add("btn-lg")
    botonProducto.classList.add("mx-5")
    botonProducto.classList.add("mb-3")
    botonProducto.classList.add("btn")
    botonProducto.classList.add("btn-outline-dark")
    botonProducto.textContent = "See product"
    botonProducto.setAttribute("type", "button")

    let separador = document.createElement("hr")
    separador.classList.add("w-75")
    separador.classList.add("mx-auto")
    separador.classList.add("d-block")
    separador.classList.add("borde")
    separador.classList.add("text-dark")

    
    //padres e hijos

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(separador)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(descripcionProducto)
    tarjeta.appendChild(precioProducto)
    tarjeta.appendChild(botonProducto)
    
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})


}
