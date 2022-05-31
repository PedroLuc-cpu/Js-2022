// function SoBoaNoticia(nota){
//     if(nota >=7){
//         console.log('Aprovado com ' + nota)
//     } else{
//         console.log('Reprovado com ' + nota)
//     }
// }

// SoBoaNoticia(6)
// SoBoaNoticia(10)


function OnlyValueTrue(value){
        if(value){
            console.log('Este Valor é verdadeiro: ' + value)
        }
        else{
            console.log('Este Valor é Falso: ' + value)
        }
}

OnlyValueTrue(undefined)
OnlyValueTrue(NaN)
OnlyValueTrue(null)
OnlyValueTrue(typeof{})
OnlyValueTrue(typeof[])
OnlyValueTrue(typeof'')
OnlyValueTrue(typeof 2)
OnlyValueTrue(0)
OnlyValueTrue('')