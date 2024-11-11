import { cabecera } from "./componentes/header.js";

import { paginaUno } from "./vistas/seccionUno.js";

import { paginaDos } from "./vistas/seccionDos.js";


function web(){
    return cabecera()
}

document.querySelector("#cabecera").innerHTML = web();

document.querySelector("#paginaUno").addEventListener("click", function(){  
        document.querySelector("#cabecera").innerHTML += paginaUno()                        
 
})

document.querySelector("#paginaDos").addEventListener("click", function(){  
             document.querySelector("#cabecera").innerHTML += paginaDos()                        
  
})

