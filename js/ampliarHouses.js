export function ampliarHouses(event){


    let fundadores = [

        { nombre: " Godric Gryffindor ", foto: "../img/Fundadores/godric.jpeg", descripcion: "He was a wizard who lived in medieval times and one of the four founders of Hogwarts School of Witchcraft and Wizardry." },
        { nombre: "Rowena Ravenclaw", foto: "../img/Fundadores/rowena.jpeg", descripcion: " She was a Scottish witch who lived in the Middle Ages. Noted for her intelligence and creativity, and is considered one of the greatest witches of the time, Ravenclaw was one of the four founders of Hogwarts School of Witchcraft and Wizardry." },
        { nombre: "Salazar Slytherin", foto: "../img/Fundadores/salazar.jpeg", descripcion: " He was a famous pure-blood wizard of the Middle Ages. He spoke Parseltongue and was extremely proficient in the use of Legilimency. He is one of the four founders of Hogwarts School of Witchcraft and Wizardry." },
        { nombre: "Helga Hufflepuff", foto: "../img/Fundadores/Helga.jpeg", descripcion: "She was a witch from medieval times and was one of the four founders of Hogwarts School of Witchcraft and Wizardry." },

    ]

    let fundador={}

    //console.log(event.target)
        
        if(event.target.classList.contains("text-decoration-none")){

            let etiquetafundador=(event.target.parentElement.querySelector("a").classList)
            let cabecera=document.getElementById("cabeceraCasa")
            
            if(etiquetafundador.contains("uno")){

                fundador.nombre=fundadores[0].nombre
                fundador.foto=fundadores[0].foto
                fundador.descripcion=fundadores[0].descripcion
                cabecera.classList.add("bg-danger")
                cabecera.classList.remove("bg-primary")
                cabecera.classList.remove("bg-success")
                cabecera.classList.remove("bg-warning")
               

              
            }else if(etiquetafundador.contains("dos")){
                
                fundador.nombre=fundadores[1].nombre
                fundador.foto=fundadores[1].foto
                fundador.descripcion=fundadores[1].descripcion
                cabecera.classList.add("bg-primary")
                cabecera.classList.remove("bg-success")
                cabecera.classList.remove("bg-warning")
                cabecera.classList.remove("bg-danger")


            }else if(etiquetafundador.contains("tres")){
               
                fundador.nombre=fundadores[2].nombre
                fundador.foto=fundadores[2].foto
                fundador.descripcion=fundadores[2].descripcion
                cabecera.classList.add("bg-success")
                cabecera.classList.remove("bg-warning")
                cabecera.classList.remove("bg-danger")
                cabecera.classList.remove("bg-primary")
               

            }else if(etiquetafundador.contains("cuatro")){
                
                fundador.nombre=fundadores[3].nombre
                fundador.foto=fundadores[3].foto
                fundador.descripcion=fundadores[3].descripcion
                cabecera.classList.add("bg-warning")
                cabecera.classList.remove("bg-danger")
                cabecera.classList.remove("bg-success")
                cabecera.classList.remove("bg-primary")
                

            }

            console.log(fundador)
               

        let etiquetaNombreFundador=document.getElementById("nombreFundador")
        etiquetaNombreFundador.textContent=fundador.nombre
 
 
        let etiquetaImagenFundador=document.getElementById("imagenFundador")
        etiquetaImagenFundador.src=fundador.foto
 
        let etiquetaDescripcionFundador=document.getElementById("descripcionFundador")
        etiquetaDescripcionFundador.textContent=fundador.descripcion



    
    
        }
    
    }