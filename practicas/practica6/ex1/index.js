console.log("HOLA")

function numeroAleatorio(minimo, maximo){
numeroAleatorio = Math.random() * (maximo - minimo + 1) + minimo;
console.log(numeroAleatorio)
return numeroAleatorio
}

numeroAleatorio(10, 20)