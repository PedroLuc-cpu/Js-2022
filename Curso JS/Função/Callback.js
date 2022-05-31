/* const fabricantes = ["Mercedes", "Audi" , "BMW"]

    function imprimir(nome, indice){
        console.log(`${indice + 1}. ${nome}`)
    }

    fabricantes.forEach(imprimir)
    fabricantes.forEach(fabricante => console.log(fabricante)) */

    //  const primeiroBloco = () =>{
    //      setInterval(  function(){
    //          console.log("acabou em 5 segundo")
    //      }, 5000)
    //  }

    //     const MostrarCallback = () =>{
    //         console.log("vai durar 5 segundo")
    //     }

    //         primeiroBloco(MostrarCallback())

            const F = (contador) => {
                    for(let c = 0; c < contador ; c++){
                                    console.log(c)
                            // setInterval(
                            //     function mostrarCincoSegundos(){
                            //         console.log(c)
                            //     },1000
                            // )
                    }

                
               
            }
                const Callback = () =>{
                    console.log("voce terminou sua contagem...")
                }

                   Callback(F(10))