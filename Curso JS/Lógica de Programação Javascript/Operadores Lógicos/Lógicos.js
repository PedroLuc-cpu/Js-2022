 function compras(trabalho1 , trabalho2){
     const compraSorvete = trabalho1 || trabalho2
     const compraTV50 = trabalho1 && trabalho2
     const compraTV32 = trabalho1 != trabalho2
     const manterSaudavel = !compraSorvete // operador unário
    //  const compraTV32 = !!(trabalho1 ^ trabalho2) // bitwise xor

    return {
        compraSorvete:compraSorvete, 

        compraTV50:compraTV50, 

        compraTV32:compraTV32, 

        manterSaudavel:manterSaudavel
    }
 }

  console.log(compras(true, true))
  console.log(compras(true, false))
  console.log(compras(false, true))
  console.log(compras(false, false))


//  algoritmo sobre comprar um carro e poder andar nele.

function andarCar(terDinheiro, terGasolina){
    const comprarCarro= terDinheiro && terGasolina
    const andardeCarro= comprarCarro && terGasolina

    return{
        comprarCarro: comprarCarro ,
        andardeCarro: andardeCarro 
    }
}

console.log(andarCar(false, true))


