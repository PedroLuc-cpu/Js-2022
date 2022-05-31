//     function Carro(modelo , marca, cor , preco){
//         this.modelo = modelo 
//         this.marca = marca 
//         this.cor = cor 
//         this.preco = preco 

//           this.DadosDoCarro = function(){
//               this.modelo = ""
//               this.marca = ""
//               this.cor = ""
//               this.preco = ""
//           }
//     }
// const CarroDate = new Carro()
       
               
           
//  class Dados{
//      constructor(nome , sobrenome, telefone,){
//             this.nome = nome
//             this.sobrenome = sobrenome
//             this.telefone = telefone
    
//      }
//  }  
//     const  MostrarSeusDados = new Dados("Pedro", "Lucas" , 98991725003)

//         console.log(MostrarSeusDados)


 function Chamar(Nome , sobrenome){
        this.Nome = Nome
        this.sobrenome = sobrenome

            this.Palavra = function(diz){
                return `${this.Nome} ${this.sobrenome} disse ${diz}`
     
            }

 }
    const Falou = new Chamar("Pedro" , "Lucas")
            console.log(Falou.Palavra("Merda"))
        

///

            function FirstName(nome, sobrenome ){
                    this.nome = nome
                    this.sobrenome = sobrenome

                            this.Citou = function(frase){
                                return `${nome} ${sobrenome} citou uma frase: "${frase}"`
                            }
            }

                const PrimeiroNome = new FirstName("Pedro" , "Lucas")
                        console.log(PrimeiroNome.Citou("A persistência é o caminho do êxito."))

                        const SegundoNome = new FirstName("Ester", "Santos")
                        console.log(SegundoNome.Citou("QUERO COMER"))