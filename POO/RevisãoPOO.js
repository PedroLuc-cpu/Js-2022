// coleção dinâmica de pares chave / valor

   const produto = new Object
    produto.nome = "Pedro"
        produto["marca do produto"] = "Generico"
            produto.preco = 220
                // console.log(produto)
                    delete produto.preco
                    delete produto["marca do produto"]
                        // console.log(produto)

const Carro = {
    Marca: "fiat",
    Modelo: "Palio",
    Ano: 2020,
        Proprietario:{
            Nome:"Pedro",
            Sobrenome:"Lucas",
            Idade: 20
        },
            Endereço:{
                logradouro: "Rua Manuel Abrão",
                numero: "S/N",
                complemento:["lote 2" , "quadra 4"]
            },
            // arry com objeto dentro
             condutores:[{
                    nome:"Eline"
                    ,idade:19
                }, {
                    nome:"Pedro",
                    idade:20
                }],    // dentro da objeto pode colocar função

                    concatenar_proprietarios: function(){
                        //...............
                    }
}

        delete Carro.Proprietario
        delete Carro.Proprietario



