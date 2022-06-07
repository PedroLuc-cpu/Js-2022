const alunos = [
    {nome:"Pedro", nota:7.5, bolsista:true},
    {nome:"Lucas", nota:5.0, bolsista:false},
    {nome:"Ester", nota:8.0, bolsista:true},
    {nome:"João", nota:4.3, bolsista:false},
    {nome:"João", nota:9.5, bolsista:false},
    {nome:"João", nota:4.1, bolsista:false},
    {nome:"João", nota:9.9, bolsista:false},
    {nome:"João", nota:10, bolsista:false},
    {nome:"João", nota:7.5, bolsista:false},
    {nome:"João", nota:6.6, bolsista:false}
]

    const todososAlunosSaobolsistas = alunos.map((Bolsista) => Bolsista.bolsista)
       
        const Reduzindo = todososAlunosSaobolsistas.reduce(function(acumulador, valorInicial){
            return acumulador && valorInicial
            // alem d usa operadores aritmaeticos, posso tambem usar operadores lógicos como && , || , !=
        })
            console.log(Reduzindo)

            const Boleanos = [ false, true , true]
                console.log(Boleanos.reduce(function(result, valorInit){
                    return result && valorInit
                }))

                console.log(Boleanos.reduce(function(result, valorInit){
                    return result || valorInit
                }))