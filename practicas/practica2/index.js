console.log("FUNCIONA!!!")

const juego=[
    {
        pregunta : "Que equipo tiene más Champions League?",

        posiblesRespuestas:["Real Madrid","Barça","Bayern Munich","Manchester City"],

        respuestaCorrecta:"Real Madrid"
    },


    {
        pregunta : "Cual es el máximo goleador de la historia?",

        posiblesRespuestas:["Messi","Pele","CR7","Mbappe"],
        
        respuestaCorrecta:"CR7"
    },


    {
        pregunta : "En que año ganó España el mundial?",

        posiblesRespuestas:["2008","2006","2002","2010"],

        respuestaCorrecta:"2010"
    }
]


for (let i = 0; i < juego.length; i++) {
console.log("El array es: ", juego[i])
}

let preguntaAleatoria = juego[Math.floor(Math.random() * juego.length)]

document.querySelector("#btnPregunta").innerHTML = preguntaAleatoria.pregunta

document.querySelector("#respuesta1").innerHTML = preguntaAleatoria.posiblesRespuestas[0]
document.querySelector("#respuesta2").innerHTML = preguntaAleatoria.posiblesRespuestas[1]
document.querySelector("#respuesta3").innerHTML = preguntaAleatoria.posiblesRespuestas[2]
document.querySelector("#respuesta4").innerHTML = preguntaAleatoria.posiblesRespuestas[3]

document.querySelector("#respuesta1").addEventListener("click", function(){
    console.clear();

    if (preguntaAleatoria.posiblesRespuestas[0] == preguntaAleatoria.respuestaCorrecta){
        console.log("CORRECTO!!! La respuesta correcta era ", preguntaAleatoria.respuestaCorrecta)   
        document.querySelector("#result").innerHTML = "CORRECTO!!! La respuesta correcta era " + preguntaAleatoria.respuestaCorrecta
        let resultado = document.querySelector("#result")
        resultado.style.display = "block";
        resultado.classList.remove("resultadoIncorrecto");
        resultado.classList.add("resultadoCorrecto");
    }
    else{
        console.log("INCORRECTO!!! La respuesta correcta era ", preguntaAleatoria.respuestaCorrecta)  
        document.querySelector("#result").innerHTML = "INCORRECTO!!! La respuesta correcta era " + preguntaAleatoria.respuestaCorrecta
        resultado = document.querySelector("#result")
        resultado.style.display = "block";
        resultado.classList.remove("resultadoCorrecto")
        resultado.classList.add("resultadoIncorrecto");
    }

    try {
        if ("click" > 1) {
            console.log("ERROR")
        }
      } catch (error) {
      }
})

document.querySelector("#respuesta2").addEventListener("click", function(){
    console.clear()

    if (preguntaAleatoria.posiblesRespuestas[1] == preguntaAleatoria.respuestaCorrecta){
        console.log("CORRECTO!!! La respuesta correcta era ", preguntaAleatoria.respuestaCorrecta)   
        document.querySelector("#result").innerHTML = "CORRECTO!!! La respuesta correcta era " + preguntaAleatoria.respuestaCorrecta
        resultado = document.querySelector("#result")
        resultado.style.display = "block";
        resultado.classList.remove("resultadoIncorrecto");
        resultado.classList.add("resultadoCorrecto");
    }
    else{
        console.log("INCORRECTO!!! La respuesta correcta era ", preguntaAleatoria.respuestaCorrecta)  
        document.querySelector("#result").innerHTML = "INCORRECTO!!! La respuesta correcta era " + preguntaAleatoria.respuestaCorrecta
        resultado = document.querySelector("#result")
        resultado.style.display = "block";
        resultado.classList.remove("resultadoCorrecto")
        resultado.classList.add("resultadoIncorrecto");
    }

    try {
        if ("click" > 1) {
            console.log("ERROR")
        }
      } catch (error) {
      }
})

document.querySelector("#respuesta3").addEventListener("click", function(){
    console.clear()

    if (preguntaAleatoria.posiblesRespuestas[2] == preguntaAleatoria.respuestaCorrecta){
        console.log("CORRECTO!!! La respuesta correcta era ", preguntaAleatoria.respuestaCorrecta)   
        document.querySelector("#result").innerHTML = "CORRECTO!!! La respuesta correcta era " + preguntaAleatoria.respuestaCorrecta
        resultado = document.querySelector("#result")
        resultado.style.display = "block";
        resultado.classList.remove("resultadoIncorrecto");
        resultado.classList.add("resultadoCorrecto");
    }
    else{
        console.log("INCORRECTO!!! La respuesta correcta era ", preguntaAleatoria.respuestaCorrecta)  
        document.querySelector("#result").innerHTML = "INCORRECTO!!! La respuesta correcta era " + preguntaAleatoria.respuestaCorrecta
        resultado = document.querySelector("#result")
        resultado.classList.remove("resultadoCorrecto")
        resultado.classList.add("resultadoIncorrecto");
    }

    try {
        if ("click" > 1) {
            console.log("ERROR")
        }
      } catch (error) {
      }
})

document.querySelector("#respuesta4").addEventListener("click", function(){
    console.clear()

    if (preguntaAleatoria.posiblesRespuestas[3] == preguntaAleatoria.respuestaCorrecta){
        console.log("CORRECTO!!! La respuesta correcta era ", preguntaAleatoria.respuestaCorrecta)   
        document.querySelector("#result").innerHTML = "CORRECTO!!! La respuesta correcta era " + preguntaAleatoria.respuestaCorrecta
        resultado = document.querySelector("#result")
        resultado.style.display = "block";
        resultado.classList.remove("resultadoIncorrecto");
        resultado.classList.add("resultadoCorrecto");
    }
    else{
        console.log("INCORRECTO!!! La respuesta correcta era ", preguntaAleatoria.respuestaCorrecta)  
        document.querySelector("#result").innerHTML = "INCORRECTO!!! La respuesta correcta era " + preguntaAleatoria.respuestaCorrecta
        resultado = document.querySelector("#result")
        resultado.style.display = "block";
        resultado.classList.remove("resultadoCorrecto")
        resultado.classList.add("resultadoIncorrecto");
    }

    try {
        if ("click" > 1) {
            console.log("ERROR")
        }
      } catch (error) {
      }
})

document.querySelector("#btnSiguiente").addEventListener("click", function(){

     preguntaAleatoria = juego[Math.floor(Math.random() * juego.length)]

    document.querySelector("#btnPregunta").innerHTML = preguntaAleatoria.pregunta

    document.querySelector("#respuesta1").innerHTML = preguntaAleatoria.posiblesRespuestas[0]
    document.querySelector("#respuesta2").innerHTML = preguntaAleatoria.posiblesRespuestas[1]
    document.querySelector("#respuesta3").innerHTML = preguntaAleatoria.posiblesRespuestas[2]
    document.querySelector("#respuesta4").innerHTML = preguntaAleatoria.posiblesRespuestas[3]
    })