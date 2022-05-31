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