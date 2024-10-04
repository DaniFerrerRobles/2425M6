console.log("FUNCIONA!!!")

    let nombre = document.querySelector('#nombre')

    let atributo1 = nombre.getAttribute('id')

    console.log("", atributo1);


    let dni = document.querySelector('#dni');

    let atributo2 = dni.getAttribute('id');

    console.log(" ", atributo2);

    let img = document.querySelector('#imagen');

    let atributo3 = img.getAttribute('id');
    
    console.log(" ", atributo3);

    function agruparCodigo(atributo1, atributo2, atributo3){
        agrupado = atributo1 + atributo2 + atributo3

        console.log(" ", agrupado)        
    }

    document.querySelector("#btnCrearFicha").addEventListener("click", function(){
        agruparCodigo(atributo1, atributo2, atributo3)
    })

    document.querySelector("#nombre").innerHTML = "Dani Ferrer Robles"

    document.querySelector("#dni").innerHTML = "45456123M"

    document.querySelector("#imagen").innerHTML = '<img src="https://www.fedpc.org/wp-content/uploads/WhatsApp-Image-2023-08-03-at-20.29.26-1.jpeg" class="card-img-top" alt="imgDani"></img>'