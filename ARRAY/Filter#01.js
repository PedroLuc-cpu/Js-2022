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