console.log('sesión 1!!!')

// COMENTARIOS
/*Comentarios diferentes (Puedes usars ctrol+k+c*/

// Variables
var nombre = "Pepe"
let apellidos = 'Potamo'
const dominio = "@fpllefia.com"
const nombreCompleto = apellidos.toLowerCase() + nombre.toLowerCase()
console.log('nombreCompleto', nombreCompleto);
const email = nombreCompleto+dominio
console.log('email: ', email);

// Concatenar textos con variables
const email2 = "otroemail"+dominio
console.log('email2: ',email2);
// Utilizando backsticks
const email3 = `otroemail${dominio}`
console.log('email3: ', email3);

// Ejemplo de uso de backsticks con codigo html
const miCodigoHtml = `
  <div>
    <p>Hola</p>
  </div>
`
console.log(miCodigoHtml);