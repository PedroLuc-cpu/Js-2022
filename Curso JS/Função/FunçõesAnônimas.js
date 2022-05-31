const soma = function (x , y){
    return x + y
}
// funça o anonimas
    const Imprimiresultado = function (a,b , operacao = soma){
        console.log(operacao(a, b))
    }

    Imprimiresultado(3, 4)

// meu treino

            const anonimas = function(a, b){
                return a * b
            }

                    const MostrarTela = (b, c, Operar = anonimas) =>{
                            console.log(Operar(b , c))
                    }

                            MostrarTela(2, 2)

                                MostrarTela(3,3, anonimas)

                                    MostrarTela(12,6, function(a, b){
                                        return a - b
                                    })
                                        MostrarTela(3,4, (x, y) => x *y)

                                            const Pessoa = {
                                                falar: function(){
                                                    console.log("Opa")
                                                }
                                            }

                                                Pessoa.falar()
