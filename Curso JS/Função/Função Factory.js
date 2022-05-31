// funçao que retorna objetos


    //sem usar a função de fabrica
    const prod1 ={
        nome:"",
        preco: 45
    }

    const prod2 ={
        nome:"...",
        preco: 145
    }

    // se for para usar varios objetos o código fica muito cheio


   // usando factory
    // simples 
        function CriarPessoa(){
            return {
                nome: "Pedro",
                sobrenome: "Lucas"
            }
        } 
        console.log(CriarPessoa())

        // 
            function CriarProduto(nome , preco){
                return {
                    nome,
                    preco,
                    desconto : 0.1
                }
            }
                console.log(CriarProduto("Cadeira Gamer" , 1100))




                // praticas     funçaõ que fabrica objetos
                    function ChamaMeuNome(){
                        return {
                            nome: "Pedro",
                            sobrenome: "Lucas"
                        }
                    }

                        console.log(ChamaMeuNome())