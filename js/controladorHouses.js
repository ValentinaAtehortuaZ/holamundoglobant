let housesimg=document.getElementById("housesimg")
housesimg.addEventListener("mouseover",function(){
    
    let audio=new Audio("../audio/hogw.mp3")
    audio.play()
})


let gryffindor=document.getElementById("titulo1")
gryffindor.addEventListener("mouseover", function(){

    let audio=new Audio("../audio/gri.mp3")
    audio.play()
})


let ravenclaw=document.getElementById("titulo2")
ravenclaw.addEventListener("mouseover", function(){

    let audio=new Audio("../audio/re.mp3")
    audio.play()
})


let slytherin=document.getElementById("titulo3")
slytherin.addEventListener("mouseover", function(){

    let audio=new Audio("../audio/Sli.mp3")
    audio.play()
})


let hufflepuff=document.getElementById("titulo4")
hufflepuff.addEventListener("mouseover", function(){

    let audio=new Audio("../audio/haf.mp3")
    audio.play()
})

/*let texto1=document.getElementById("texto1")
texto1.addEventListener("click", function(){
    console.log("lanzar modal")
})*/

// IMPORTACION DE ELEMENTOS

import{llenarHouses} from "./llenarHouses.js"

import{ampliarHouses} from "./ampliarHouses.js"


// VARIABLES GLOBALES DE LA TIENDA


// llamo a la funcion llenarTienda

llenarHouses()



// Llamar la funcion ampliar info productos

let modalHouses = new bootstrap.Modal(document.getElementById('modalHouses'))

let informacion=document.getElementById("fila")
informacion.addEventListener("click",function(event){

    fundadores=ampliarHouses(event)
    modalHouses.show()
   
})
