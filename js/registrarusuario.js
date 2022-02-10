//0. Importo libreria de autentificacion

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

// 1. Para registrar a una persona en su app

let botonregistro = document.getElementById("botonregistro")


// 1.1 CREO UNA REFERENCIA GLOBAL A LA VENTANA GLOBAL

let modalLogin = new bootstrap.Modal(document.getElementById('modalLogin'))
let mensajeLogin = document.getElementById("mensajeLogin")

let botonLogin = document.getElementById('botonLogin')
let mensajeLogin2 = document.getElementById("mensajeLogin")

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
            mensajeLogin.textContent = "Exito en el registro. ¡Bienvenido!"
            modalLogin.show()
            console.log("todo good")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            mensajeLogin.textContent = `Error: ${errorCode} : ${errorMessage}`
            modalLogin.show()
            console.log("error" + errorCode + " " + errorMessage)
        });

})

botonLogin.addEventListener("click", function (event) {
    event.preventDefault()

    console.log("estoy logiando")

    // obtenemos el valor de cada input del formulario

    let email = document.getElementById("cajaemail").value
    let password = document.getElementById("cajapassword").value


 // Agregar la rutina para llevar los datos firebase
    //(hablar con el back)

    const auth = getAuth();
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...

    mensajeLogin2.textContent = " ¡Bienvenido a la aplicación!"
    modalLogin.show()
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    //
    mensajeLogin2.textContent = `Error: ${errorCode} : ${errorMessage}`
    modalLogin.show()
    console.log("error" + errorCode + " " + errorMessage)
  });


})