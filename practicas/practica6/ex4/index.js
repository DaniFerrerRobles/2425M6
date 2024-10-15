document.querySelector("#btnGenerarContrasena").addEventListener("click", function(){
    function contrasena() {
        let letras = 'abcdefghijklmnopqrstuvwxyz'
        let contrasenaAleatoria

        for (let i = 0; i < 10; i++) {
            let letra = letras.charAt(Math.floor(Math.random() * letras.length));

            contrasenaAleatoria += letra

        }
        document.querySelector("#inputContrasena").value = contrasenaAleatoria
    }
    contrasena()        
})