console.log('Sesión 4');



// array
const frutas = ['pera', 'manzana', 'plátano', 9, 32, "34"]
// acceso a posición del array
console.log(frutas[2]);

// array de dos dimensiones
const barquitos = [
  ["1A","1B","1C"],
  ["2A","2B","2C"],
  ["3A","3B","3C"],
]
console.log(barquitos[1][2]);// 2C

// Objetos javascript
const persona = {
  nombre : 'Pepe',
  apellidos : 'Lotillas Rotas'
}

console.log('nombre = ', persona.nombre);

// Array de objetos
const arrayPersonas = [
  {
    nombre : 'Pepe',
    apellidos : 'Lotillas Rotas'
  },
  {
    nombre : 'Sara',
    apellidos : 'Lotillas Rotas'
  },
  {
    nombre : 'Andres',
    apellidos : 'Roto Rotas'
  }
]

console.log(arrayPersonas[2].nombre);


const alumnes = [
  {
    nom: "Joan Pérez",
    edat: 18,
    correu: "joan.perez@example.com",
    moduls: [
      { nom: "Desenvolupament Web", nota: 8.5 },
      { nom: "Bases de Dades", nota: 7.0 },
      { nom: "Sistemes Operatius", nota: 6.5 }
    ]
  },
  {
    nom: "Maria Sánchez",
    edat: 19,
    correu: "maria.sanchez@example.com",
    moduls: [
      { nom: "Desenvolupament Web", nota: 9.0 },
      { nom: "Bases de Dades", nota: 8.0 },
      { nom: "Sistemes Operatius", nota: 7.5 }
    ]
  },
  {
    nom: "Pere Martínez",
    edat: 20,
    correu: "pere.martinez@example.com",
    moduls: [
      { nom: "Desenvolupament Web", nota: 7.5 },
      { nom: "Bases de Dades", nota: 6.0 },
      { nom: "Sistemes Operatius", nota: 8.0 }
    ]
  }
];

console.log('La nota de sistemas operativos de María Sanchez es: '); // 7.5
console.log('Nombre del segundo módulo de Pere'); // Bases de Dades

// Recorres elementos de un array con for

for(let i=0;i<arrayPersonas.length;i++){
  console.log('nombre de ',i,alumnes[i].nom);
}

// Generando html a partir de un array
// Cremos lista desordenada con los nombres de los alumnos
// <ul><li>joan</li><li>Maria</li><li>Pere</li></ul>

let listaHtml = '<ul>'

for(let i=0;i<arrayPersonas.length;i++){
  listaHtml += `
    <li> ${arrayPersonas[i].nombre} </li>
  `
}

listaHtml += '</ul>'