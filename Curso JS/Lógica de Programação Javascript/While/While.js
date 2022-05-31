function GetInteiroAleatorioEntre(min , max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 9

while(opcao != -1){
    opcao =GetInteiroAleatorioEntre(-1 , 10)
    console.log(`Opcão escolhida foi ${opcao}`)
}
console.log('Até a próxima')
