// Funcion para lleanr dinamicamente la tienda



let productos=[

    {nombre:" Hermione Granger Bag", precio:120000,foto:"../img/Productos/bolso.jpg",descripcion:"Réplica Bolso Hermione Granger "},
    {nombre: "Platform Poster 9 3/4", precio: 70000,foto:"../img/Productos/anden.jpg",descripcion:" Réplica Cartel Andén 9 3/4"},
    {nombre:"Hogwarts Goblet Cup", precio:130000,foto:"../img/Productos/copa1.jpg",descripcion:" Copa Cáliz Hogwarts"},
    {nombre:"Hermione figure with wand", precio: 90000,foto:"../img/Productos/hermione.jpg",descripcion:" Figura Hermione con varita"},
    {nombre:"Dragées of all flavors", precio:30000,foto:"../img/Productos/grageas.jpg",descripcion:"Grageas de todos los sabores"},
    {nombre:"Marauder's Map", precio:200000,foto:"../img/Productos/mapa.jpg",descripcion:"Mapa del Merodeador"},
    {nombre:"Golden snitch", precio:100000,foto:"../img/Productos/replica.jpg",descripcion:"Snitch dorada"},
    {nombre:"Sorting Hat", precio:150000,foto:"../img/Productos/sombrero.jpg",descripcion:" Sombrero Seleccionador"},
    {nombre:" Rowena Ravenclaw Diadem ", precio:350000,foto:"../img/Productos/tiara.jpg",descripcion:" Réplica Diadema de Rowena Ravenclaw "},
    {nombre: "Wands", precio:300000,foto:"../img/Productos/varitas.jpg",descripcion:"Varitas"},

    
]




let fila = document.getElementById("fila")

// Recorrer eñ arreglo y sacarle fotocopia a la informacion que hay por dentro

productos.forEach(function (producto) {

    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let imagen = document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("h-50")
    imagen.classList.add("p-3")
    imagen.src = producto.foto


    let nombreProducto = document.createElement("h5")
    nombreProducto.classList.add("text-dark")
    nombreProducto.classList.add("text-center")
    nombreProducto.textContent = producto.nombre

    let descripcionProducto = document.createElement("h4")
    descripcionProducto.textContent = producto.drescripcion

    let precioProducto = document.createElement("h5")
    precioProducto.classList.add("text-center")
    precioProducto.classList.add("text-danger")
    precioProducto.textContent = producto.precio
    precioProducto.textContent = "$" + producto.precio

    let botonVerProducto = document.createElement("button")
    botonVerProducto.classList.add("m-2")
    botonVerProducto.classList.add("btn")
    botonVerProducto.classList.add("btn-outline-dark")
    botonVerProducto.textContent = "See product"
    botonVerProducto.setAttribute("type", "button")

    

    let separador = document.createElement("hr")
    separador.classList.add("w-75")
    separador.classList.add("mx-auto")
    separador.classList.add("d-block")



    //padres e hijos

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(separador)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(descripcionProducto)
    tarjeta.appendChild(precioProducto)
    tarjeta.appendChild(botonVerProducto)
    
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})



