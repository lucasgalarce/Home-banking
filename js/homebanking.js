//Declaración de variables
let nombreUsuario = 'Lucas Galarce';
let saldoCuenta = 500;
let limiteExtraccion = 1000;
//Servicios
let agua = 350, telefono = 425, luz = 210, internet = 570;
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
//Validaciones
    if(isNaN(extraer) || extraer <= 0)
        return alert("Numero invalido");
    if(!(haySaldoDisponible(extraer)))
        return alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
     else if(extraer > limiteExtraccion) 
        return alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extracción.");
     else if(extraer % 100) 
        return alert("Solo puedes extraer billetes de 100.");
//Ejecucion
    alert(`Has extraido: $${extraer}
    Saldo anterior: $${saldoCuenta}
    Saldo actual: $${saldoCuenta - extraer}`);
    saldoCuenta -= extraer;
    actualizarSaldoEnPantalla();
}
//Si hay saldo retorna true.
function haySaldoDisponible(dinero){
    if(dinero <= saldoCuenta)
        return true;
    else
        return false;
}

function depositarDinero() {
    let deposito = parseInt(prompt("Ingrese el dinero a depositar: "));
    if(isNaN(deposito) || deposito <= 0)
        return alert("Numero invalido");

    alert(`Has depositado: $${deposito}
    Saldo anterior: $${saldoCuenta}
    Saldo actual: $${saldoCuenta + deposito}`);
    saldoCuenta += deposito;
    actualizarSaldoEnPantalla();
}

function pagarServicio() {
    servicioPagar = parseInt(prompt(`Ingrese el numero correspondiente al servicio que desea pagar:
    1-Agua
    2-Telefono
    3-Luz
    4-Internet`));
    switch(servicioPagar) {
        case 1:
            if(haySaldoDisponible(agua)){
                alert(`Has pagado el servicio Internet.
                Saldo anterior: $${saldoCuenta}
                Dinero descontado: $${agua}
                Saldo actual: $${saldoCuenta - agua}`);
                saldoCuenta -= agua;
            } else {
                alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
            }
            break;
        case 2:
            if(haySaldoDisponible(telefono)){
                alert(`Has pagado el servicio Internet.
                Saldo anterior: $${saldoCuenta}
                Dinero descontado: $${telefono}
                Saldo actual: $${saldoCuenta - telefono}`);
                saldoCuenta -= telefono;
            } else {
                alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
            }
            break;
        case 3:
            if(haySaldoDisponible(luz)){
                alert(`Has pagado el servicio Internet.
                Saldo anterior: $${saldoCuenta}
                Dinero descontado: $${luz}
                Saldo actual: $${saldoCuenta - luz}`);
                saldoCuenta -= luz;
            } else {
                alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
            }
            break;
        case 4:
            if(haySaldoDisponible(internet)){
                alert(`Has pagado el servicio Internet.
                Saldo anterior: $${saldoCuenta}
                Dinero descontado: $${internet}
                Saldo actual: $${saldoCuenta - internet}`);
                saldoCuenta -= internet;
            } else {
                alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
            }
            break;
        default:
            alert("Numero invalido.");
    }
    actualizarSaldoEnPantalla();

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