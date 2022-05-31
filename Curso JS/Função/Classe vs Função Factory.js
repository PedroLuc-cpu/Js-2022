class Pessoa{
    constructor(nome){
        // variavel pública usando this
        this.nome = nome
    }
        falar(){
            console.log(`Meu nome ${this.nome}`)
        }
}
    const p1 = new Pessoa("Pedro")
        p1.falar()

//
        const pessoa = nome =>{
            return{
                falar:() => console.log(`Meu nome é ${nome}`)
            }
        }

          const p2 = pessoa("Lucas")
            p2.falar()  


                