var datesPerson= {
    nome: 'Pedro',
    sobrenome:'Lucas',
    idade: 20,
    strinAnos:'Anos',
    fullAge:function(){
        return this.idade +' '+ this.strinAnos
    },
    nomeCompleto: function() {
        return this.nome +' '+ this.sobrenome
    }
}

let test=datesPerson.fullAge()
let test2=datesPerson.nomeCompleto()
console.log(datesPerson.nomeCompleto())
console.log(datesPerson.fullAge())

console.log(
    `Meu nome é ${test2} e tenho ${test}`
)


/* 
usso em um método

Quando usado em um método de objeto, isso se refere ao objeto.

No exemplo no topo desta página, isso se refere ao objeto pessoa.

Porque o método fullName é um método do objeto pessoa.


dentro de um objeto, usar uma função nem é necessário usar um da funcão

function   name     (params) {
         não use
}

*/

/*

Para determinar a qual objeto thisse refere; Use a seguinte precedência de ordem.

Precedência	Objeto
1	ligar()
2	aplicar() e chamar()
3	Método do objeto
4	Âmbito global

Está thisem uma função sendo chamada usando bind()?

Está thisem uma função que está sendo chamada usando apply()?

Está thisem uma função que está sendo chamada usando call()?

Está thisem uma função de objeto (método)?

Está thisem uma função no escopo global.

*/