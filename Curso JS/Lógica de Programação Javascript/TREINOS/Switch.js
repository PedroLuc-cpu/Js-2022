const imprimirResultado= function (nota){
    switch (Math.floor(nota)){  // floor é um metedo de arredondamento
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break

            case 8: case 7: 
                console.log('Aprovado')
                break
            case 6: case 5: case 4:
                console.log('Recuperação')
                break
            case 3: case 2: case 1: case 0: // (sintaxe não suportada) podemos usar apenas 1 case // exemplo: case 3,2,1,0: apenas usando virgulas.
                console.log('Reprovado')
                break

            default:
                console.log('Nota Inválida')    
    }
}

imprimirResultado(3.99 )


