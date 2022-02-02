export function ampliarHouses(event){

    let fundador={}
        
        if(event.target.classList.contains("href")){

            console.log("hiciste click")
    
          // console.log(event.target.parentElement.querySelector("h5").textContent)
          // console.log(event.target.parentElement.querySelector("h6").textContent)
          // console.log(event.target.parentElement.querySelector("img").src)
    
          fundador={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h5").textContent,
            descripcion:event.target.parentElement.querySelector("h3").textContent
        }
 
        let etiquetaNombreProducto=document.getElementById("nombreProducto")
        etiquetaNombreProducto.textContent=fundador.nombre
 
 
        let etiquetaImagenProducto=document.getElementById("imagenProducto")
        etiquetaImagenProducto.src=fundador.foto
 
        let etiquetaDescripcionProducto=document.getElementById("descripcionProducto")
        etiquetaDescripcionProducto.textContent=fundador.descripcion
 
        return(fundador)
    
    
        }
    
    }