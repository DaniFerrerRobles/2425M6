function contrasena() {
    let longitud = 10
    let letras = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < longitud; i++) {
        let letra = letras.charAt(Math.floor(Math.random() * letras.length));
        console.log(" ", letra)
    }
}
contrasena()
