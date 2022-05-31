// pessoa -> 123 -> {...}
const pessoa = {
    nome: "Pedro"
}
    console.log(pessoa)

        pessoa.nome= "Lucas"
            console.log(pessoa.nome)
                
            
            // freeze = congelar o Objeto
                Object.freeze(pessoa)
                pessoa.nome="Santos"
                console.log(pessoa.nome)

    // pessoa -> 456 ->{...}

        // pessoa = {nome:"Lucas"}
        //     console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome:"João"})
        console.log(pessoaConstante)

            pessoaConstante.nome= "Marcos"
                console.log(pessoaConstante.nome)