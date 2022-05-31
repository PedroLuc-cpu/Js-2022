// fazer mapeamendo de uma array para outra array do mesmo tamanho mas os dados transformados
// transformar uma array em outro = uma string em um objeto
// fazer uma transformação
// não modifica a array atual, ele gera um novo array

const num = [1,4,9]
    const roots = num.map(Math.sqrt)
        console.log(roots)

        /////
let numero = [1,4,9]
    let dobrar = numero.map(function(num){
        return num * 2
    })

        console.log(dobrar)

    /// sobre a aula:

        let nums = [1,2,3,4,5]
            let resultado = nums.map(function(e){
                return e * 2
            })

            console.log(resultado)

let soma10 = e => e + 10
let triplo = e => e * 3
let paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`
            resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
                console.log(resultado)

/////////////////////////////

            const numberMap = [3,6,9]
               let double =  numberMap.map(function(numberMap){
                return numberMap * 3
            })
                

                    console.log(double)