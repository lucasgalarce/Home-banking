//Declaración de variables
let nombreUsuario = 'Lucas Galarce';
let saldoCuenta = 100;
let limiteExtraccion = 1000;
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

}

function extraerDinero() {
    let extraer = parseInt(prompt("Ingrese el dinero a extraer: "));
    if(extraer > saldoCuenta){
        return alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
    } else if(extraer > limiteExtraccion) {
        return alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extracción.");
    }

    alert(`Has extraido: ${extraer}
    Saldo anterior: ${saldoCuenta}
    Saldo actual: ${saldoCuenta - extraer}`);
    saldoCuenta -= extraer;
    actualizarSaldoEnPantalla();
}

function depositarDinero() {
    let deposito = parseInt(prompt("Ingrese el dinero a depositar: "));
    alert(`Has depositado: ${deposito}
    Saldo anterior: ${saldoCuenta}
    Saldo actual: ${saldoCuenta + deposito}`);
    saldoCuenta += deposito;
    actualizarSaldoEnPantalla();
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}