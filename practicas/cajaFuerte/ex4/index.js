document.querySelector("#boton").addEventListener("click", function(){
    let numero = Math.floor(Math.random() * 100) + 1;
    
    document.querySelector("#resultat").innerHTML = numero
})