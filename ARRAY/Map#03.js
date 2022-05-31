// new array , map()
    Array.prototype.map2 = function(callback){
        const newArray = []
            for(let i = 0; i< this.length; i++){
                newArray.push(callback(this[i], i , this))
            }
            return newArray
    }


let carrinho = [
    '{"nome":"Borracha", "preço": 3.45}',
    '{"nome":"Caderno", "preço": 13.90}',
    '{"nome":"Kit de lapis", "preço": 41.22}',
    '{"nome":"Caneta", "preço": 7.50}']
    
       let paraObjeto = json => JSON.parse(json)
       let apenasPreco = produto =>produto.preço
       let resultado = carrinho.map(paraObjeto).map(apenasPreco)
        console.log(resultado)

        //////////////////////////////


            const vetores = [3,7,4,8,10]
                let somar = Somar => Somar + 10
                    let mult = Mult => Mult * 10
                        let mapeando = vetores.map(somar).map(mult)
                            console.log(mapeando)
            /////////////////////////////////
            let foReach = ["Pedro", "Lucas", 20 , 1.70, null , undefined , true]
                foReach.forEach(function(nome, index){
                    return console.log(`${index + 1}) ${nome}`)
                })
                    console.log(foReach)


        //////////// splice()
                let myNome = ["Pedro lucas"]
                        myNome.splice(0,0, "Pedro")
                            console.log(myNome)