console.log("Calculadora Inicializada!")

let entradaActual = "";

/*document.querySelector("#numero0").addEventListener("click", function(){
    console.log("0")    
})*/

// document.querySelector("#numero0").addEventListener("click", function(){
//     document.querySelector("#pantalla").innerHTML = " 0 "
// })

document.querySelector("#numero0").addEventListener("click", function(){
    entradaActual += "0"
    document.querySelector("#pantalla").innerHTML = entradaActual
})

/*document.querySelector("#numero1").addEventListener("click", function(){
    console.log("1")    
})*/

// document.querySelector("#numero1").addEventListener("click", function(){
//     document.querySelector("#pantalla").innerHTML = " 1 "
// })

document.querySelector("#numero1").addEventListener("click", function(){
    entradaActual += "1"
    document.querySelector("#pantalla").innerHTML = entradaActual
})



/*document.querySelector("#numero2").addEventListener("click", function(){
    console.log("2")    
})*/

// document.querySelector("#numero2").addEventListener("click", function(){
//     document.querySelector("#pantalla").innerHTML = " 2 "
// })

document.querySelector("#numero2").addEventListener("click", function(){
    entradaActual += "2"
    document.querySelector("#pantalla").innerHTML = entradaActual
})

/*document.querySelector("#numero3").addEventListener("click", function(){
    console.log("3")    
})*/

// document.querySelector("#numero3").addEventListener("click", function(){
//     document.querySelector("#pantalla").innerHTML = " 3 "
// })

document.querySelector("#numero3").addEventListener("click", function(){
    entradaActual += "3"
    document.querySelector("#pantalla").innerHTML = entradaActual
})

/*document.querySelector("#numero4").addEventListener("click", function(){
    console.log("4")    
})*/

// document.querySelector("#numero4").addEventListener("click", function(){
//     document.querySelector("#pantalla").innerHTML = " 4 "
// })

document.querySelector("#numero4").addEventListener("click", function(){
    entradaActual += "4"
    document.querySelector("#pantalla").innerHTML = entradaActual
})

/*document.querySelector("#numero5").addEventListener("click", function(){
    console.log("5")    
})*/

// document.querySelector("#numero5").addEventListener("click", function(){
//     document.querySelector("#pantalla").innerHTML = " 5 "
// })

document.querySelector("#numero5").addEventListener("click", function(){
    entradaActual += "5"
    document.querySelector("#pantalla").innerHTML = entradaActual
})

/*document.querySelector("#numero6").addEventListener("click", function(){
    console.log("6")    
})*/

// document.querySelector("#numero6").addEventListener("click", function(){
//     document.querySelector("#pantalla").innerHTML = " 6 "
// })

document.querySelector("#numero6").addEventListener("click", function(){
    entradaActual += "6"
    document.querySelector("#pantalla").innerHTML = entradaActual
})

/*document.querySelector("#numero7").addEventListener("click", function(){
    console.log("7")    
})*/

// document.querySelector("#numero7").addEventListener("click", function(){
//     document.querySelector("#pantalla").innerHTML = " 7 "
// })

document.querySelector("#numero7").addEventListener("click", function(){
    entradaActual += "7"
    document.querySelector("#pantalla").innerHTML = entradaActual
})

/*document.querySelector("#numero8").addEventListener("click", function(){
    console.log("8")    
})*/

// document.querySelector("#numero8").addEventListener("click", function(){
//     document.querySelector("#pantalla").innerHTML = " 8 "
// })

document.querySelector("#numero8").addEventListener("click", function(){
    entradaActual += "8"
    document.querySelector("#pantalla").innerHTML = entradaActual
})

/*document.querySelector("#numero9").addEventListener("click", function(){
    console.log("9")
})*/

// document.querySelector("#numero9").addEventListener("click", function(){
//     document.querySelector("#pantalla").innerHTML = " 9 "
// })

document.querySelector("#numero9").addEventListener("click", function(){
    entradaActual += "9"
    document.querySelector("#pantalla").innerHTML = entradaActual
})

/*document.querySelector("#botonAdd").addEventListener("click", function(){
    console.log("+")
})*/

// document.querySelector("#botonAdd").addEventListener("click", function(){
//     document.querySelector("#pantalla").innerHTML = " + "
// })

document.querySelector("#botonAdd").addEventListener("click", function(){
    entradaActual += "+"
    document.querySelector("#pantalla").innerHTML = entradaActual
})

/*document.querySelector("#botonMenos").addEventListener("click", function(){
    console.log("-")
})*/

// document.querySelector("#botonMenos").addEventListener("click", function(){
//     document.querySelector("#pantalla").innerHTML = " - "
// })

document.querySelector("#botonMenos").addEventListener("click", function(){
    entradaActual += "-"
    document.querySelector("#pantalla").innerHTML = entradaActual;
})

/*document.querySelector("#botonIgual").addEventListener("click", function(){
    console.log("=")
})*/

// document.querySelector("#botonIgual").addEventListener("click", function(){
//     document.querySelector("#pantalla").innerHTML = " = "
// })

document.querySelector("#botonBorrar").addEventListener("click", function(){
    entradaActual = ' '

    document.querySelector("#pantalla").innerHTML = " 0 ";
})



document.querySelector("#botonIgual").addEventListener('click', function() {
    console.log(entradaActual)
    const resultado = eval(entradaActual);
    console.log("Resultado = ", resultado);
    document.querySelector("#pantalla").innerHTML = resultado;
  })
  

  document.querySelector('#botonIgual').addEventListener('click', function() {
    try {
      if (entradaActual !== '') {
        const resultado = eval(entradaActual);
        document.querySelector('pantalla').innerHTML = resultado;
      } else {
        console.log('No hay nada para calcular');
      }
    } catch (error) {
      console.log('Error en l\'operació:', error);
      document.querySelector('pantalla').textContent = 'Error';
    }
  });  
  





