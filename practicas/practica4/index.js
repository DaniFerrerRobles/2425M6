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

    document.querySelector("#btnCrearFicha").addEventListener("click", function(event){
        event.preventDefault()

        console.log("DENTRO")
        agruparCodigo(atributo1, atributo2, atributo3)         

        let inputNombre = document.querySelector(".inputNombre").value
        document.querySelector("#nombre").innerHTML += inputNombre

        let inputPrimerApellido = document.querySelector(".inputPrimerApellido").value
        document.querySelector(" #nombre").innerHTML +=' ' + inputPrimerApellido


        let inputSegundoApellido = document.querySelector(".inputSegundoApellido").value
        document.querySelector(" #nombre").innerHTML += ' ' +  inputSegundoApellido


        let inputDni = document.querySelector(".inputDni").value
        document.querySelector("#dni").innerHTML = inputDni


         let inputUrlImg = document.querySelector(".inputUrlImg").value
         document.querySelector("#imagen").src = inputUrlImg

    })