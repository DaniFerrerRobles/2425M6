console.log("FUNCIONA")

    document.querySelector("#btnCrearFicha").addEventListener("click", function(event){
        event.preventDefault()

        console.log("DENTRO")
        
        let inputNombre = document.querySelector(".inputNombre").value
        document.querySelector("#nombre").innerHTML = inputNombre

        let inputPrimerApellido = document.querySelector(".inputPrimerApellido").value
        document.querySelector(" #nombre").innerHTML +=' ' + inputPrimerApellido


        let inputSegundoApellido = document.querySelector(".inputSegundoApellido").value
        document.querySelector(" #nombre").innerHTML += ' ' +  inputSegundoApellido


        let inputDni = document.querySelector(".inputDni").value
        document.querySelector("#dni").innerHTML = inputDni


         let inputUrlImg = document.querySelector(".inputUrlImg").value
         document.querySelector("#imagen").src = inputUrlImg


         let bd = [
        ]


      let  usuario = {
            nombre: inputNombre,

            apellidos: inputPrimerApellido + ' ' + inputSegundoApellido,

            dni: inputDni,

            urlImg: inputUrlImg
        }

        bd.push(usuario)

        function pintaTaula(){
            console.log("Esta es la funcion pintaTaula")   

            
            for (let i = 0; i < bd.length; i++) {
             let tabla = `    
            <tr>
              <td><img width="30" src="${bd[i].urlImg}" alt="img"></td>
              <td>${bd[i].nombre}</td>
              <td>${bd[i].apellidos}</td>
              <td>${bd[i].dni}</td>
            </tr>                
                 `
            document.querySelector("#datos").innerHTML += tabla
            }

        }

        pintaTaula()

    })