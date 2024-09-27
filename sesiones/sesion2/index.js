console.log('Hola sesión 2')
// // SUMAR NÚMEROS
// // Pedir datos con prompt
// const numero = prompt('Introduce un número: ')
// console.log('número: ', numero);
// const numero2 = prompt('Introduce un número: ')
// console.log('número2: ', numero2);
// console.log('suma: ', parseInt(numero) + parseInt(numero2))

// JUEGO DE LOS NÚMEROS
const numeroAdivinar = 10
let intentos = 0
let numeroIntroducido = -1
while(intentos<3 && numeroAdivinar != numeroIntroducido){
  console.log('intentos', intentos);
  numeroIntroducido = prompt('Introduce un número: ')
  console.log('numeroIntroducido: ' + numeroIntroducido);

  if(numeroIntroducido>numeroAdivinar){
    console.log('El numero es menor')
  }else if(numeroIntroducido<numeroAdivinar){
    console.log('El número es mayor')
  }else{
    console.log('El número es igual')
  }


  intentos++
}