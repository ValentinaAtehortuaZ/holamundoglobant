export function llenarHouses() {

    let fundador = [

        { nombre: " Godric Gryffindor ", foto: "../img/Fundadores/godric.jpeg", descripcion: "He was a wizard who lived in medieval times and one of the four founders of Hogwarts School of Witchcraft and Wizardry." },
        { nombre: "Rowena Ravenclaw", foto: "../img/Fundadores/rowena.jpeg", descripcion: " She was a Scottish witch who lived in the Middle Ages. Noted for her intelligence and creativity, and is considered one of the greatest witches of the time, Ravenclaw was one of the four founders of Hogwarts School of Witchcraft and Wizardry." },
        { nombre: "Salazar Slytherin", foto: "../img/Fundadores/salazar.jpeg", descripcion: " He was a famous pure-blood wizard of the Middle Ages. He spoke Parseltongue and was extremely proficient in the use of Legilimency. He is one of the four founders of Hogwarts School of Witchcraft and Wizardry." },
        { nombre: "Helga Hufflepuff", foto: "../img/Fundadores/Helga.jpeg", descripcion: "She was a witch from medieval times and was one of the four founders of Hogwarts School of Witchcraft and Wizardry." },


    ]

    let fila = document.getElementById("fila")

    fundador.forEach(function (fundador) {

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
        imagen.src = fundador.foto

        let nombreProducto = document.createElement("h5")
        nombreProducto.classList.add("text-dark")
        nombreProducto.classList.add("fw-bold")
        nombreProducto.classList.add("text-center")
        nombreProducto.textContent = fundador.nombre

        let descripcionProducto = document.createElement("h3")
        descripcionProducto.classList.add("invisible")
        descripcionProducto.classList.add("h6")
        descripcionProducto.classList.add("text-center")
        descripcionProducto.classList.add("text-muted")
        descripcionProducto.textContent = fundador.descripcion



        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombreProducto)
        tarjeta.appendChild(descripcionProducto)

        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
}

