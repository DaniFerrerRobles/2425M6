console.log("FUNCIONA!!!")

const juego=[
    {
        pregunta : "Que equipo tiene más Champions League?",

        posiblesRespuestas:["Real Madrid","Barça","Bayern Munich","Manchester City"],

        respuestaCorrecta:"Real Madrid"
    },


    {
        pregunta : "Cual es el máximo goleador de la historia?",

        posiblesRespuestas:["Messi","Pele","CR7","Pele"],
        
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


const preguntaAleatoria = juego[Math.floor(Math.random() * juego.length)]

document.querySelector("#btnPregunta").innerHTML = preguntaAleatoria.pregunta

document.querySelector("#btnRespuestas").innerHTML = preguntaAleatoria.posiblesRespuestas


   let respuestaUsuario = document.querySelector("#btnRespuestas").addEventListener("click", function(){
            if (respuestaUsuario==juego[respuestaCorrecta]){
                console.log("Correcto!!! La respuesta correcta era ", juego[respuestaCorrecta])                
            }
            else{
               console.log("Incorrecto!!! La respuesta correcta era ", juego[respuestaCorrecta])
                }                
            },


document.querySelector("#btnSiguiente").addEventListener("click", function(){

    const preguntaAleatoria = juego[Math.floor(Math.random() * juego.length)]

    document.querySelector("#btnPregunta").innerHTML = preguntaAleatoria.pregunta
    
    document.querySelector("#btnRespuestas").innerHTML = preguntaAleatoria.posiblesRespuestas
})

   )