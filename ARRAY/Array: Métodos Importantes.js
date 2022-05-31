const pilotos = ["Vettel", "Alonso", "Aiton", "Massa"]
    pilotos.pop()
    //pop : remove o ultimo elemento
    console.log(pilotos)

    pilotos.push("Verstappen")
    // add elemento
    console.log(pilotos)

    pilotos.shift()
    // remove o primeiro elemento
    console.log(pilotos)

    pilotos.unshift("Hamilton")
    // add no primeiro elemento
    console.log(pilotos)

    pilotos.splice(2,0,"Bottas", "Massa")
    console.log(pilotos) //add

        // remover 
            pilotos.splice(3,1)
                console.log(pilotos)


                const algunsPilotos1 = pilotos.slice(2) // novo array
                    console.log(algunsPilotos1)

                        const algunsPilotos2 = pilotos.slice(1,4)
                        console.log(algunsPilotos2)