const valor = String("Global") 
    function myfunction(){
        console.log(valor)
    }
    

    function exec(){
        const valor = "Local"

        myfunction()
    }

    exec()

        // sem closure
        const NomeCompleto = "Pedro Lucas Santos dos Santos"
            const formataNome = nome =>{
                const nomes = nome.split(" ")
                    return `${nomes[0]} ${nomes[nomes.length -1]}`
            }
                console.log(formataNome(NomeCompleto))



                // com closure
                    const NameComplet =()=>{
                        const nome = "Pedro Lucas Santos dos Santos"

                            const formataNomes = () =>{
                                const nomes = nome.split(" ")
                                    return `${nomes[0]} ${nomes[nomes.length - 1]}`
                            }
                                return formataNomes
                    }
                    const minhaclosure = NameComplet()
                        console.log(minhaclosure())

                            
                    // outro teste
                        const x = "Global"
                            function fora(){
                                const x = "Local"
                                    function dentro(){
                                        return x
                                    }
                                    return dentro
                            }

                            const minhaFuncao  = fora()
                                console.log(minhaFuncao())
  