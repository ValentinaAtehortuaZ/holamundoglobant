//0. Importo libreria de autentificacion

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

// 1. Para registrar a una persona en su app

let botonregistro = document.getElementById("botonregistro")
botonregistro.addEventListener("click", function (event) {
    event.preventDefault()

    // obtenemos el valor de cada input del formulario

    let email = document.getElementById("cajaemail").value
    let password = document.getElementById("cajapassword").value


    //Validar formulario



    // Agregar la rutina para llevar los datos firebase
    //(hablar con el back)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log("todo good")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..

            console.log("error"+errorCode+" "+errorMessage)
        });

})