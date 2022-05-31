const pai  = {nome:"Pedro", CorOlhos:"Azul", CorCabelos:"Castanhos"}
   const filha = Object.create(pai)
        filha.nome = "Ana"
            console.log(filha.CorCabelos)

const filha2 = Object.create(pai, {
    nome:{
        value:"Bia", writable false , enumerable true
    }
})

    

























            function Person(name , sobrenome){
                this.name = name
                this.sobrenome = sobrenome
            }
                Person.prototype.bio = function(){
                    return `Meu nome é ${this.name} ${this.sobrenome}`
                }
                    const meuNome = new Person("Pedro", "Lucas")
                        console.log(meuNome.bio())