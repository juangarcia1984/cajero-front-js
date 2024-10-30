//se crean las variables con los campos del formulario
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const cuenta = document.getElementById("count");
const pass = document.getElementById("password");
const texto = document.getElementById("resultado");
const form = document.getElementById("form-registro");

//agragamos el evento submit para el formulario
form.addEventListener("submit", function(event){
    event.preventDefault();//evita el envio del formulario por defecto

//se crea una variable para almacenar los mensajes de error dentro del formulario
let errores = [];

//validamos que el nombre tenga al menos 5 caracteres
//trim: elimina los espacios en blanco
//lenght: obtiene la longitud del texto ingresado
//errores.push: agrega los mensajes de error al arreglo errores
if (nombre.value.trim().length < 5) {
    errores.push("The name must be 5 characters");
}

//validacion del email usando expresiones regulares
//se asigna una expresion regular a una variable para validar el formato del email
//.test: verifica si el valor ingresado en el campo email coincide con el patron de la expresion regular
const emailregular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailregular.test(email.value.trim())) {
    errores.push("The email is not valid");
}

//validacion de la cuenta debe ser numero positivo
/*if (isNaN(cuenta.value) || cuenta.value <= 0) {
    errores.push("Enter a positive number");*/

//validacion de la contraseña 6 caracteres
if (pass.value.trim().length < 6) {
    errores.push("Password must be 6 characters");
}

//mostrar errores o enviar el formulario
if (errores.length > 0) {
    texto.innerHTML = errores.join("<br>");
}else {
    texto.innerHTML = "You have successfully registered"
}
})

