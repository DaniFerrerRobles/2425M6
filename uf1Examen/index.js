cotxes =[
    {
        nombre: "Bugatti Chiron Super Sport 300+",
        potencia: 1.500,
        motor: "8.0 litres W16",
        foto: "https://fotografias.lasexta.com/clipping/cmsimages01/2019/09/22/AE57D7C7-17CD-48C2-AE3A-785EA910E572/98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=high&format=webply"
    },

    {
        nombre: "Koenigsegg Jesko",
        potencia: 1.600,
        motor: "V8 de 5.0 litres",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrYx6yiKK3Kfb9uQWTtx2fSj0aBScRZ3qwA&s"
    },

    {
        nombre: "Hennessey Venom F5",
        potencia: 1.800,
        motor: "V8 de 6.6 litres",
        foto: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Hennessey_Venom_F5%2C_GIMS_2018%2C_Le_Grand-Saconnex_%281X7A1390%29.jpg"
    },

    {
        nombre: "Rimac C_Two",
        potencia: 1.900,
        motor: "Electric",
        foto: "https://img.remediosdigitales.com/aeddf5/rimac-c_two-2019/1366_2000.jpg"
    },

    {
        nombre: "Lamborghini Sian",
        potencia:800,
        motor: "V12 hibrid",
        foto: "https://upload.wikimedia.org/wikipedia/commons/1/18/Lamborghini_Sian_at_IAA_2019_IMG_0332.jpg"
    }

]

for(i=0; i < cotxes.length; i++){
    let datos = ` 
    <div class="card" style="width: 18rem;">   
        <img src= "${cotxes[i].foto}">
        <div class="card-body">
        <h5 class="card-title">${cotxes[i].nombre}</h5>
        <p class="card-text">${cotxes[i].potencia}</p>
        <p class="card-text">${cotxes[i].motor}</p>   
    </div>            

    `
    document.querySelector("#datosCotxes").innerHTML += datos 
}

    for(i=0; i < cotxes.length; i++){
        let seleccionCoches = ` 
          <option value="valor">${cotxes[i].nombre}</option>
>            
        `
        document.querySelector("#seleccionCotxesUno").innerHTML += seleccionCoches 
    }  

    for(i=0; i < cotxes.length; i++){
        let seleccionCochesDos = ` 
          <option value="valor">${cotxes[i].nombre}</option>
>            
        `
        document.querySelector("#seleccionCotxesDos").innerHTML += seleccionCochesDos 
    } 
    
    

    




document.querySelector("#comparar").addEventListener("click", function(){
})
