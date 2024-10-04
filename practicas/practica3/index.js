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



 posicionActual = 1
 aciertos = 0
 errores = 0

console.log("Posición actual: ", posicionActual, "Aciertos: ", aciertos, "Errores: ", errores)



 const preguntaAleatoria = juego[Math.floor(Math.random() * juego.length)]

 document.querySelector("#pregunta").innerHTML = preguntaAleatoria.pregunta

 document.querySelector("#respuesta1").innerHTML = preguntaAleatoria.posiblesRespuestas[0]
 document.querySelector("#respuesta2").innerHTML = preguntaAleatoria.posiblesRespuestas[1]
 document.querySelector("#respuesta3").innerHTML = preguntaAleatoria.posiblesRespuestas[2]
 document.querySelector("#respuesta4").innerHTML = preguntaAleatoria.posiblesRespuestas[3]

 function mouJugador(){
 document.querySelector("#respuesta1").addEventListener("click", function(){
     console.clear();

         if (preguntaAleatoria.posiblesRespuestas[0] == preguntaAleatoria.respuestaCorrecta){
                 posicionActual = posicionActual + 1

                 console.log("Respuesta correcta!!! Nueva posición: ", posicionActual )    
                
                 aciertos = aciertos + 1 

                 posicion = document.querySelector(".div")

                 posicion.classList.add("div-point")
                 
                 if (posicionActual == 20) {
                    console.log("Has llegado a la posición ", posicionActual)
                    console.log("Aciertos Totales: ", aciertos)
                    console.log("Errores Totales: ", errores)                     
                 }

         }
         else{
             posicionActual=posicionActual - 3

             if(posicionActual<1){
                 posicionActual=1
             }
            
             errores = errores + 1
            
             console.log("Respuesta incorrecta!!! Nueva posición:  ", posicionActual)

             posicion = document.querySelector(".div")

             posicion.classList.remove("div-point")
         }

         console.log("Aciertos ", aciertos)
         console.log("Errores ", errores)

 },

 document.querySelector("#respuesta2").addEventListener("click", function(){
     console.clear();

         if (preguntaAleatoria.posiblesRespuestas[1] == preguntaAleatoria.respuestaCorrecta){

                 posicionActual = posicionActual + 1

                 console.log("Respuesta correcta!!! Nueva posición: ", posicionActual )    
                
                     aciertos = aciertos + 1

                     posicion = document.querySelector(".div")

                     posicion.classList.add("div-point")                     
                     
                     if (posicionActual == 20) {
                        console.log("Has llegado a la posición ", posicionActual)
                        console.log("Aciertos Totales: ", aciertos)
                        console.log("Errores Totales: ", errores)                     
                     }

         }
         else{
             posicionActual=posicionActual - 3

             if(posicionActual<1){
                 posicionActual=1
             }

             errores++
            
             console.log("Respuesta incorrecta!!! Nueva posición:  ", posicionActual) 

             posicion = document.querySelector(".div")

             posicion.classList.remove("div-point")
         }

         console.log("Aciertos ", aciertos)
         console.log("Errores ", errores)

 }),

 document.querySelector("#respuesta3").addEventListener("click", function(){
     console.clear();

         if (preguntaAleatoria.posiblesRespuestas[2] == preguntaAleatoria.respuestaCorrecta){

                 posicionActual = posicionActual + 1

                 console.log("Respuesta correcta!!! Nueva posición: ", posicionActual )    
                
                 aciertos = aciertos + 1    

                 posicion = document.querySelector(".div")

                 posicion.classList.add("div-point")
                 
                 if (posicionActual == 20) {
                    console.log("Has llegado a la posición ", posicionActual)
                    console.log("Aciertos Totales: ", aciertos)
                    console.log("Errores Totales: ", errores)                     
                 }

         }
         else{
             posicionActual=posicionActual - 3

             if(posicionActual<1){
                 posicionActual=1
             }
             errores = errores + 1
            
             console.log("Respuesta incorrecta!!! Nueva posición:  ", posicionActual) 

             posicion = document.querySelector(".div")

             posicion.classList.remove("div-point")
         }

         console.log("Aciertos ", aciertos)
         console.log("Errores ", errores)

 }),

 document.querySelector("#respuesta4").addEventListener("click", function(){
     console.clear();
         if (preguntaAleatoria.posiblesRespuestas[3] == preguntaAleatoria.respuestaCorrecta){

                 posicionActual = posicionActual + 1

                 console.log("Respuesta correcta!!! Nueva posición: ", posicionActual )    
                
                 aciertos = aciertos + 1

                 posicion = document.querySelector(".div")

                 posicion.classList.add("div-point")

                 if (posicionActual == 20) {
                    console.log("Has llegado a la posición ", posicionActual)
                    console.log("Aciertos Totales: ", aciertos)
                    console.log("Errores Totales: ", errores)                     
                 }
         }
         else{
             posicionActual=posicionActual - 3

             if(posicionActual<1){
                 posicionActual=1
             }
            
             errores = errores + 1
            
             console.log("Respuesta incorrecta!!! Nueva posición:  ", posicionActual) 

             posicion = document.querySelector(".div")

             posicion.classList.remove("div-point")
         }

         console.log("Aciertos ", aciertos)
         console.log("Errores ", errores)

 }),


 document.querySelector("#btnSiguiente").addEventListener("click", function(){

     const preguntaAleatoria = juego[Math.floor(Math.random() * juego.length)]

     document.querySelector("#pregunta").innerHTML = preguntaAleatoria.pregunta

     document.querySelector("#respuesta1").innerHTML = preguntaAleatoria.posiblesRespuestas[0]
     document.querySelector("#respuesta2").innerHTML = preguntaAleatoria.posiblesRespuestas[1]
     document.querySelector("#respuesta3").innerHTML = preguntaAleatoria.posiblesRespuestas[2]
     document.querySelector("#respuesta4").innerHTML = preguntaAleatoria.posiblesRespuestas[3]           
        
     document.querySelector("#respuesta1").addEventListener("click", function(){
        console.clear();

            if (preguntaAleatoria.posiblesRespuestas[0] == preguntaAleatoria.respuestaCorrecta){
                    posicionActual = posicionActual + 1
   
                    console.log("Respuesta correcta!!! Nueva posición: ", posicionActual )    
                   
                    aciertos = aciertos + 1  

                    posicion = document.querySelector(".div")

                    posicion.classList.add("div-point")
                    
                    if (posicionActual == 20) {
                        console.log("Has llegado a la posición ", posicionActual)
                        console.log("Aciertos Totales: ", aciertos)
                        console.log("Errores Totales: ", errores)                     
                     }
   
            }
            else{
                posicionActual=posicionActual - 3
   
                if(posicionActual<1){
                    posicionActual=1
                }
               
                errores = errores + 1
               
                console.log("Respuesta incorrecta!!! Nueva posición:  ", posicionActual) 

                posicion = document.querySelector(".div")

                posicion.classList.remove("div-point")
            }
   
            console.log("Aciertos ", aciertos)
            console.log("Errores ", errores)
    }),
   
   
    document.querySelector("#respuesta2").addEventListener("click", function(){
        console.clear();
   
            if (preguntaAleatoria.posiblesRespuestas[1] == preguntaAleatoria.respuestaCorrecta){
   
                    posicionActual = posicionActual + 1
   
                    console.log("Respuesta correcta!!! Nueva posición: ", posicionActual )    
                   
                        aciertos = aciertos + 1    

                        posicion = document.querySelector(".div")

                        posicion.classList.add("div-point")
                        
                        if (posicionActual == 20) {
                            console.log("Has llegado a la posición ", posicionActual)
                            console.log("Aciertos Totales: ", aciertos)
                            console.log("Errores Totales: ", errores)                     
                         }
   
            }
            else{
                posicionActual=posicionActual - 3
   
                if(posicionActual<1){
                    posicionActual=1
                }
   
                errores = errores +1
               
                console.log("Respuesta incorrecta!!! Nueva posición:  ", posicionActual)
                
                posicion = document.querySelector(".div")

                posicion.classList.remove("div-point")
            }
   
            console.log("Aciertos ", aciertos)
            console.log("Errores ", errores)
    }),
   
    document.querySelector("#respuesta3").addEventListener("click", function(){
        console.clear();
            if (preguntaAleatoria.posiblesRespuestas[2] == preguntaAleatoria.respuestaCorrecta){
   
                    posicionActual = posicionActual + 1
   
                    console.log("Respuesta correcta!!! Nueva posición: ", posicionActual )    
                   
                    aciertos = aciertos + 1       

                    posicion = document.querySelector(".div")

                    posicion.classList.add("div-point")
                    
                    if (posicionActual == 20) {
                        console.log("Has llegado a la posición ", posicionActual)
                        console.log("Aciertos Totales: ", aciertos)
                        console.log("Errores Totales: ", errores)                     
                     }
   
            }
            else{
                posicionActual=posicionActual - 3
   
                if(posicionActual<1){
                    posicionActual=1
                }
                errores = errores + 1
               
                console.log("Respuesta incorrecta!!! Nueva posición:  ", posicionActual) 

                posicion = document.querySelector(".div")

                posicion.classList.remove("div-point")
            }
   
            console.log("Aciertos ", aciertos)
            console.log("Errores ", errores)
    }),
   
    document.querySelector("#respuesta4").addEventListener("click", function(){
        console.clear();
   
            if (preguntaAleatoria.posiblesRespuestas[3] == preguntaAleatoria.respuestaCorrecta){
   
                    posicionActual = posicionActual + 1
   
                    console.log("Respuesta correcta!!! Nueva posición: ", posicionActual )    
                   
                    aciertos = aciertos + 1

                    posicion = document.querySelector(".div")

                    posicion.classList.add("div-point")

                    if (posicionActual == 20) {
                        console.log("Has llegado a la posición ", posicionActual)
                        console.log("Aciertos Totales: ", aciertos)
                        console.log("Errores Totales: ", errores)                     
                     }
            }
            else{
                posicionActual=posicionActual - 3
   
                if(posicionActual<1){
                    posicionActual=1
                }
               
                errores = errores + 1
               
                console.log("Respuesta incorrecta!!! Nueva posición:  ", posicionActual) 

                posicion = document.querySelector(".div")

                posicion.classList.remove("div-point")
            }
   
            console.log("Aciertos ", aciertos)
            console.log("Errores ", errores)
        })
    }
    )
    )
}
mouJugador()
