let UserName = "Vladi"
const UserPassword = "1234"

if (1==1 && 2==2) {
    console.log("Se activo el condicional!")
}

let User = {
    name : "Vlad",
    age : 25,
    gender : "male",
}
for (let index = 0; index < 5; index++) {
    console.log(index)
}
console.log(User.name)

//Eventos

let boton = document.getElementById("boton");
let contenido_default_boton = boton.textContent;
let contenedor_contenido = document.getElementById("contenedor_contenido");
let mensaje = document.getElementById("mensaje");

boton.onclick = function() {
    contenedor_contenido.classList.toggle("contenedor_contenido_click");
};

mensaje.onmouseover = function() {
    mensaje.className = "display-5";
};

mensaje.onmouseout = function() {
    mensaje.className = "";
};


//temporizador que se rinicia cuando se toca una tecla y hace que un boton cambie a su contenido default
var tiempoInactividad = 10000; // Tiempo de inactividad en milisegundos (5 segundos)
var temporizador;

function iniciarTemporizador() {
    temporizador = setTimeout(function() {
        boton.textContent = contenido_default_boton;
    }, tiempoInactividad);
}

function reiniciarTemporizador() {
    clearTimeout(temporizador);
    iniciarTemporizador();
    console.log("se reinicia temporizador!");
}
//

//Evento que se activa cuando se toca una tecla, indica en un boton que tecla fue y reinicia el temporizador
document.onkeydown = function(tecla) {
    if (tecla.key == "Enter") {
        console.log("tocaste enter!");
    }
    boton.textContent = "tocaste la tecla    "+tecla.key;
    reiniciarTemporizador();
};

// Iniciar el temporizador por primera vez
iniciarTemporizador();