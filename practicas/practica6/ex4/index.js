document.querySelector("#btnGenerarContrasena").addEventListener("click", function() {
    function contrasena() {
        let letras = 'abcdefghijklmnopqrstuvwxyz';
        let contrasenaAleatoria =''

        for (let i = 0; i < 10; i++) {
            let letra = Math.floor(Math.random() * letras.length)
            contrasenaAleatoria += letras[letra]
        }

        document.querySelector("#inputContrasena").value = contrasenaAleatoria
    }
    contrasena()  
})