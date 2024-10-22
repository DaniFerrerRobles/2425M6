console.log("HOLA")

document.querySelector(".btnEnviar").addEventListener("click", function(event){
    event.preventDefault()

    num1 = document.querySelector("#num1").value

    num2 = document.querySelector("#num2").value

    numero1 = parseInt(num1)

    numero2 = parseInt(num2)

    function numeroAleatorio(numero1, numero2){
        numeroAleatorio = Math.random() * (numero2 - numero1) + numero1;
        console.log(numeroAleatorio)
       return document.querySelector("#numeroAleatorio").innerHTML = numeroAleatorio
    }

    numeroAleatorio(numero1, numero2)    
})












