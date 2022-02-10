export function verCarrito(carrito) {



    let contenedor = document.getElementById("contenedorCarrito")
    contenedor.innerHTML = ""
    let total = 0, totalfinal = 0
    if (carrito.leng == 0) {

        let columna1 = document.createElement("div")
        columna1.classList.add("col-12")


        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid")
        imagen.classList.add("w-100")
        imagen.src = "../img/cajavacia.png"
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

            let nombreProducto = document.createElement("h5")
            nombreProducto.textContent = producto.nombre

            let precioProducto = document.createElement("h6")
            precioProducto.textContent = "$" + producto.precio
            precioProducto.textContent = producto.precio

            let cantidad = document.createElement("h6")
            cantidad.textContent = producto.cantidad
            cantidad.textContent = producto.cantidad + " Und"


            let separador = document.createElement("hr")
            separador.classList.add("w-150")
            separador.classList.add("mx-auto")
            separador.classList.add("d-block")
            separador.classList.add("text-dark")


            total = total + (Number(producto.precio) * Number(producto.cantidad))

            //PADRES E HIJOS
            columna1.appendChild(fotoProducto)
            fila.appendChild(columna1)
            fila.appendChild(columna2)
            columna2.appendChild(nombreProducto)
            columna2.appendChild(precioProducto)
            columna2.appendChild(cantidad)
            columna2.appendChild(separador)

            contenedor.appendChild(fila)





        })

        totalfinal = document.createElement("h5")
        totalfinal.textContent = total
        totalDolares
        contenedor.appendChild(totalfinal)
    }
}