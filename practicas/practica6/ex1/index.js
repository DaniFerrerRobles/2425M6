console.log("HOLA")

document.querySelector(".btnEnviar").addEventListener("click", function(event){
    event.preventDefault()

    numero1 = document.querySelector("#num1").value

    numero2 = document.querySelector("#num2").value

    function numeroAleatorio(numero1, numero2){
        numeroAleatorio = Math.random() * (numero2 - numero1 + 1) + numero1;
        console.log(numeroAleatorio)
       return document.querySelector("#numeroAleatorio").innerHTML = numeroAleatorio
    }

    numeroAleatorio(numero1, numero2)    
})












