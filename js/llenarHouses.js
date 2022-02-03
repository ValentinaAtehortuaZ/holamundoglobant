export function llenarHouses() {

    let fundador = [

        { nombre: " Godric Gryffindor ", foto: "../img/Fundadores/godric.jpeg", descripcion: "He was a wizard who lived in medieval times and one of the four founders of Hogwarts School of Witchcraft and Wizardry." },
        { nombre: "Rowena Ravenclaw", foto: "../img/Fundadores/rowena.jpeg", descripcion: " She was a Scottish witch who lived in the Middle Ages. Noted for her intelligence and creativity, and is considered one of the greatest witches of the time, Ravenclaw was one of the four founders of Hogwarts School of Witchcraft and Wizardry." },
        { nombre: "Salazar Slytherin", foto: "../img/Fundadores/salazar.jpeg", descripcion: " He was a famous pure-blood wizard of the Middle Ages. He spoke Parseltongue and was extremely proficient in the use of Legilimency. He is one of the four founders of Hogwarts School of Witchcraft and Wizardry." },
        { nombre: "Helga Hufflepuff", foto: "../img/Fundadores/Helga.jpeg", descripcion: "She was a witch from medieval times and was one of the four founders of Hogwarts School of Witchcraft and Wizardry." },


    ]

    let contenedorFundador = document.getElementById("contenedorFundador")

    fundador.forEach(function (fundador) {

        // Creamos los elementos necesarios para pintar los productos (traversing)

        let fila=document.createElement("div")
        fila.classList.add("row")

        
        let columna = document.createElement("div")
        columna.classList.add("col")


        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-60")
        imagen.classList.add("p-3")
        imagen.src = fundador.foto

        let nombreFundador = document.createElement("h5")
        nombreFundador.classList.add("text-dark")
        nombreFundador.classList.add("fw-bold")
        nombreFundador.classList.add("text-center")
        nombreFundador.textContent = fundador.nombre

        let descripcionFundador = document.createElement("h3")
        descripcionFundador.classList.add("invisible")
        descripcionFundador.classList.add("h6")
        descripcionFundador.classList.add("text-center")
        descripcionFundador.classList.add("text-muted")
        descripcionFundador.textContent = fundador.descripcion



        columna.appendChild(imagen)
        columna.appendChild(nombreFundador)
        columna.appendChild(descripcionFundador)

        fila.appendChild(columna)
        contenedorFundador.appendChild(fila)

    })
}

