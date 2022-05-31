 function Pessoa(nome){
     this.nome = nome

        this.falar = () =>{
            return `Meu nome é ${nome}`
        }
            
 }
    const MeuNome = new Pessoa("Pedro")
        console.log(MeuNome.falar())