const aprovados = ["Agatha" , "Aldo", "Daniel", "Raquel"]

aprovados.forEach(
    function(nome, indice){
        console.log(`${indice + 1}) ${nome} `)
    }
)

///////////////////////
const meusDados = ["Pedro", "Lucas", 20 , "Santos"]

    meusDados.forEach(function(dates, index){
        console.log(`${index + 1} - ${dates}`)
    })


    //////////////////////////////qq

        const arrObct = [{id:1, dados:"Pedro"}, {id:2, dados:"Lucas"}, 
                        {id:3 , dados:"Santos"}, {id:4, dados:20},
                        {id:5 , dados:72.5}, {id:6, dados:1.70}]

                            arrObct.forEach(elemento => console.log(elemento.dados))

                    