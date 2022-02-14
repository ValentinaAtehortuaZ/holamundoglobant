export function verCarrito(carrito) {



    let contenedor = document.getElementById("contenedorCarrito")
    contenedor.innerHTML = ""
    let total = 0, totalfinal = 0

    if (carrito.length === 0) {

        let columna1 = document.createElement("div")
        columna1.classList.add("col-12")


        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid")
        imagen.classList.add("w-100")
        imagen.src = "../img/cajavacia.png"

        columna1.appendChild(imagen)
        contenedor.appendChild(columna1)
    } else {



        carrito.forEach(function (producto) {

            let fila = document.createElement("div")
            fila.classList.add("row")

            let columna1 = document.createElement("div")
            columna1.classList.add("col-12")
            columna1.classList.add("col-md-4")

            let columna2 = document.createElement("div")
            columna2.classList.add("col-12")
            columna2.classList.add("col-md-4")
            columna2.classList.add("text-center")

            let fotoProducto = document.createElement("img")
            fotoProducto.classList.add("img-fluid")
            fotoProducto.classList.add("w-100")
            fotoProducto.src = producto.foto

            let botonEliminar=document.createElement("button")
            botonEliminar.classList.add("btn-close")
            botonEliminar.classList.add("btn-close-dark")
            botonEliminar.classList.add( "btn-close-opacity")
            botonEliminar.setAttribute("type", "button")
            
        
            let nombreProducto = document.createElement("h5")
            nombreProducto.classList.add("text-center")
            nombreProducto.textContent = producto.nombre

            let precioProducto = document.createElement("h6")
            precioProducto.classList.add("text-center")
            precioProducto.textContent = "$" + producto.precio
            precioProducto.textContent = producto.precio
            precioProducto.textContent = ("$") + Intl.NumberFormat("de-DE").format(producto.precio)

            let cantidad = document.createElement("h6")
            cantidad.classList.add("text-center")
            cantidad.textContent = producto.cantidad
            cantidad.textContent = producto.cantidad + " Und"


            let separador = document.createElement("hr")
            separador.classList.add("w-150")
            separador.classList.add("mx-auto")
            separador.classList.add("d-block")
            separador.classList.add("text-dark")

            let subtotal = document.createElement("h6")
            subtotal.classList.add("text-center")
            subtotal.textContent = ("Subtotal: ") + ("$") + Intl.NumberFormat("de-DE").format(producto.cantidad * producto.precio)




            total = total + (Number(producto.precio) * Number(producto.cantidad))

            //PADRES E HIJOS
            fila.appendChild(botonEliminar)
            columna1.appendChild(fotoProducto)
            fila.appendChild(columna1)
            fila.appendChild(columna2)
            columna2.appendChild(nombreProducto)
            columna2.appendChild(precioProducto)
            columna2.appendChild(cantidad)
            columna2.appendChild(subtotal)
            columna2.appendChild(separador)


            contenedor.appendChild(fila)



        })

        totalfinal = document.createElement("h5")
        totalfinal.classList.add("text-center")
        totalfinal.textContent = total
        contenedor.appendChild(totalfinal)



        let botonUSD = document.getElementById("dolares")
        botonUSD.addEventListener("click", function () {

            let cambiarDolares

            let total=0

            carrito.forEach(function(producto){

                total = total + (Number(producto.precio) * Number(producto.cantidad))

                cambiarDolares = total / 4000
                console.log(total)

                botonUSD.textContent = cambiarDolares + ("USD")

            })
           

        })

       


    }





}


