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
            const mapearValores = alunos.map(function(mapear){ // mapeando apenas notas
                return mapear.nota
            })
            const filtrandoValores = mapearValores.filter(function(filtrar){ // filtrou as notas maior 7.5
                return filtrar >= 7.5
            })

            console.log(filtrandoValores)



                const reducingValores = filtrandoValores.reduce(function(acumulador, valorInicial){
                    console.log(acumulador, valorInicial)
                        return acumulador + valorInicial
                }, 0)