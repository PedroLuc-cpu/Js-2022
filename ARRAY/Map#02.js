// pode .map(valor1).map(valor2).map(valor3) = resultado final

let carrinho = [
'{"nome":"Borracha", "preço": 3.45}',
'{"nome":"Caderno", "preço": 13.90}',
'{"nome":"Kit de lapis", "preço": 41.22}',
'{"nome":"Caneta", "preço": 7.50}']

   let paraObjeto = json => JSON.parse(json)
   let apenasPreco = produto =>produto.preço
   let resultado = carrinho.map(paraObjeto).map(apenasPreco)
    console.log(resultado)
        
     
// treino
var numbers = [1, 4, 9];
var roots = numbers.map(somar => somar * 3);
   console.log(roots)


   let procts = [{marca:"PS4", valor:120},
                {marca:"PS5", valor: 500}]

                  let transformandoDolar = procts.map(transformandoparaReal => transformandoparaReal.valor * Number(4.73)).filter(maisCaro =>  maisCaro >= 1000)
                     console.log(transformandoDolar
                     )
               
   
                  
              