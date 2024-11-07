document.querySelector("#btnConvertirNombre").addEventListener("click", function(){

    let nombre = document.querySelector("#inputNombre").value

    function nombreActualizado(nombre) {
        let espacios = nombre.trim();
        espacios = espacios.replace(/\s+/g, "-");
        document.querySelector("#nombreCompleto").innerHTML = espacios
        return espacios;
    }

    nombreActualizado(nombre);
})


document.querySelector("#btnConvertirFecha").addEventListener("click", function(){

    let fechaNacimiento = document.querySelector("#inputFecha").value 
    
    function fechaActualizada(fechaNacimiento) {
        let formatoFecha = fechaNacimiento.replace(/\//g, "-");
        document.querySelector("#fechaCompleta").innerHTML = formatoFecha
        return formatoFecha;
    }

    fechaActualizada(fechaNacimiento);        
})