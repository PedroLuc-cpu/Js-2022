class Conta {constructor(){
    this.saldo = 0
}
deposita(valor){
    this.saldo += valor
}}

class ContaPoupanca extends Conta{
    atualizar(indice){
        this.saldo += this.saldo * indice
    }
}
    let contaPoupanca = new ContaPoupanca()
        contaPoupanca.deposita(1000)
        contaPoupanca.atualizar(0.05)
        console.log(contaPoupanca.saldo)
  


        // teste 

            class Person{
                constructor(nome, sobrenome, idade, peso){
                    this.fullname ={
                        nome, sobrenome
                    }
                    
                    this.idade = idade 
                    this.peso = peso
                }
            }

            Person.prototype.bio = function(){
                return `Meu nome é ${this.fullname.nome} ${this.fullname.sobrenome}, tenho ${this.idade} anos e peso ${this.peso} kilos`
            }
                    let Pesonagem = new Person("Pedro", "Lucas", 20 , 72.344)        
                        console.log(Pesonagem.bio())

                        let Pesonagem01 = new Person("Ester", "Lima", 19, 62.445)
                            console.log(Pesonagem01.bio())

                                let eu = {
                                    nome: "Pedro",
                                    sobrenome: "Lucas"
                                }
                                    console.log(eu)