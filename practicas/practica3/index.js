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

let posicionActual = 0
let aciertos = 0
let errores = 0

console.log(" Posicion actual", posicionActual, "Aciertos ", aciertos, "Errores ", errores)

 const respuestas=["#respuesta1","#respuesta2","#respuesta3", "#respuesta4"]




while (posicionActual < juego.length) {
    for (let i = 0; i < respuestas.length && posicionActual < juego.length; i++) {
      const preguntaAleatoria = juego[Math.floor(Math.random() * juego.length)]

      document.querySelector("#pregunta").innerHTML = preguntaAleatoria.pregunta
   
      document.querySelector("#respuesta1").innerHTML = preguntaAleatoria.posiblesRespuestas[0]
      document.querySelector("#respuesta2").innerHTML = preguntaAleatoria.posiblesRespuestas[1]
      document.querySelector("#respuesta3").innerHTML = preguntaAleatoria.posiblesRespuestas[2]
      document.querySelector("#respuesta4").innerHTML = preguntaAleatoria.posiblesRespuestas[3]

for (let i = 0; i < respuestas.length; i++) {
    document.querySelector(respuestas[i]).innerHTML = preguntaAleatoria.posiblesRespuestas[i] 
}
   
      document.querySelector(respuestas[i]).addEventListener("click", function(){

          if (respuestas[i] = preguntaAleatoria.respuestaCorrecta) {
              delante = true             
          }
          else{delante = false}
   
          function mouJugador(delante){
              if(delante){
                      posicionActual = posicionActual + 1
   
                      console.log("Respuesta correcta!!! Nueva posición: ", posicionActual )    
                  
                      aciertos = aciertos + 1          
   
              }
              else{
                  posicionActual=posicionActual - 3
   
                  if(posicionActual<1){
                      posicionActual=1
                  }
               
                  console.log("Respuesta incorrecta!!! Nueva posición:  ", posicionActual) 

                  errores = errores + 1
              }
   
              console.log("Aciertos ", aciertos)
              console.log("Errores ", errores)   
      }
      }
      )    


      document.querySelector("#btnSiguiente").addEventListener("click", function(){

          const preguntaAleatoria = juego[Math.floor(Math.random() * juego.length)]
   
          document.querySelector("#pregunta").innerHTML = preguntaAleatoria.pregunta
   
          document.querySelector("#respuesta1").innerHTML = preguntaAleatoria.posiblesRespuestas[0]
          document.querySelector("#respuesta2").innerHTML = preguntaAleatoria.posiblesRespuestas[1]
          document.querySelector("#respuesta3").innerHTML = preguntaAleatoria.posiblesRespuestas[2]
          document.querySelector("#respuesta4").innerHTML = preguntaAleatoria.posiblesRespuestas[3]
        
          document.querySelector(respuestas[i]).addEventListener("click", function(){

                 if (respuestas[i] = preguntaAleatoria.respuestaCorrecta) {
                     delante = true             
                 }
                else{delante = false}
       
              function mouJugador(delante){
                  if (delante){
                          posicionActual = posicionActual + 1
       
                          console.log("Respuesta correcta!!! Nueva posición: ", posicionActual )    
                       
                          aciertos = aciertos + 1          
       
                  }
                  else{

                      posicionActual=posicionActual - 3
       
                      if(posicionActual<1){
                          posicionActual=1
                      }
                   
                 
                     console.log("Respuesta incorrecta!!! Nueva posición:  ", posicionActual) 
                      
                        errores = errores + 1
                 }
       
                 console.log("Aciertos ", aciertos)
                 console.log("Errores ", errores)
    
    
                
         }
     }
         )
     }
     )
    }
}
mouJugador()




if (posicionActual == 3) {
     function comprovaFinalJoc() {
     console.log("Enhorabuena!!! Has llegado a la posición:  ", posicionActual)
     console.log("Aciertos Totales", aciertos)
     console.log("Errores Totales ", errores) 

     document.querySelector("#btnSiguiente").disabled = true
}
    comprovaFinalJoc()
}
