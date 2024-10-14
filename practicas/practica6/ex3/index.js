let nombre = prompt("Nombre:");

let fechaNacimiento = prompt("Fecha de nacimiento:");

function nombreActualizado(nombre) {
    let espacios = nombre.trim();
    espacios = espacios.replace(/\s+/g, "-");
    console.log("Nombre: ", espacios);
    return espacios;
}

function fechaActualizada(fechaNacimiento) {
    let formatoFecha = fechaNacimiento.replace(/\//g, "-");
    console.log("Fecha: ", formatoFecha);
    return formatoFecha;
}

nombreActualizado(nombre);
fechaActualizada(fechaNacimiento);