//Filter = filtrar uma array
// map = transformar uma array em outro


/// usando filter()
        let produtos = [
        {nome: 'Notebook', preco: 2499, fragil: true},
        {nome: 'iPad Pro', preco: 4199, fragil: true},
        {nome: 'Copo de vidro', preco: 12.49, fragil: true},
        {nome: 'Copo de plastico', preco: 18.99, fragil: false}
        ]

            console.log(produtos.filter(function(p){
                return  p.preco > 2000
            }).filter(function(f){
                return f.fragil
            }))


            // criar função para fazer o filter()
                function filtrar(value){
                    return value>=10
                }
                    let filtrando = [1,3,5,6,8,10,34,12,23,100,2]
                        
                            console.log(filtrando.filter(filtrar))


                /// 
                const aulosAprovados = [
                {Aluno:"Pedro", nota: 9.7},
                {Aluno:"Joao", nota: 8.7},
                {Aluno:"Maria", nota: 7.5},
                {Aluno:"Paulo", nota: 4.5},
                {Aluno:"Ester", nota: 10},
                {Aluno:"Jonas", nota: 7.7},
                {Aluno:"Lucas", nota: 3.2},
                {Aluno:"Bernado", nota: 5.4},
                {Aluno:"Frederico", nota: 9.9}]
                  
                    let aprovalosSucess = aulosAprovados.filter(function(passaram){
                        return passaram.nota >= 6.5
                    })
                        console.log(aprovalosSucess)


// for in 

    let Objeto = {a:1, b:2, c:3}
                    for( let propriedade in Objeto){
                        console.log(`O Objeto ${propriedade} é o ${Objeto[propriedade]}`)
                    }

                    // map()

                        let valorReal= [120, 500, 1000, 185]
                            let valorDolar = valorReal.map(function(ArrayNum){
                                    return ArrayNum * 4.73
                            })
                                console.log(valorDolar)

let numeros = [1,2,3,4,5,6,7,8,9,10]
    function buscarNumerosPares(value){
        if(value % 2 === 0)
        return value
    }
        let numerosPares = numeros.filter(buscarNumerosPares)
            console.log(numerosPares)