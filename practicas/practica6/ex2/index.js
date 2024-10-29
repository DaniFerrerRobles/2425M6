    function contarPalabras(){
        let texto = document.querySelector("#texto").value
        texto = texto.trim()
        let palabras = texto.split(" ")
        let numeroPalabras = palabras.length

        document.querySelector("#pablabrasTotales").innerHTML = "El texto tiene " + numeroPalabras + "palabras"
    }

    function coincidenciaPalabras(){
        let texto = document.querySelector("#texto").value
        let palabra = document.querySelector("#palabraParaBuscar").value

        let regexp = new RegExp(palabra, 'gi')
        let coincidencias = texto.match(regexp)
        let totalCoincidencias = coincidencias.length

        document.querySelector("#fraseCoincidencias").innerHTML = "Se ha encontrado " + totalCoincidencias + " " + "coincidencias"

        let textoResaltado = texto.replace(regexp, '<span class="resaltado">$&</span>')
        document.querySelector("#frase").innerHTML = textoResaltado;


    }

function convertirMayusculas(){
    let textoMayus = document.querySelector("#texto").value;
    document.querySelector("#texto").value = textoMayus.toUpperCase();
}

function convertirMinusculas(){
    let textoMinus = document.querySelector("#texto").value;
    document.querySelector("#texto").value = textoMinus.toLowerCase();
}


document.querySelector("#convertirMinusculas").addEventListener("click", function(){
    convertirMinusculas()    
})

document.querySelector("#convertirMayusculas").addEventListener("click", function(){
    convertirMayusculas()    
})

document.querySelector("#btnBuscar").addEventListener("click", function(){
    coincidenciaPalabras() 
})

let frase = document.querySelector("#resumen").innerHTML = "Hola me llamo Dani, tengo 22 años y estudio DAW"

console.log(frase)
  
let diezCaracteres = frase.slice(0,10)

document.querySelector("#resumen").innerHTML = diezCaracteres + '...'

document.querySelector("#btnMostrar").addEventListener("click", function(){
    let texto = document.querySelector("#texto").value
    document.querySelector("#frase").innerHTML = texto

    contarPalabras()

})

