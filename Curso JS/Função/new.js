
            function construtor( nome , sobrenome){
                this.nome = nome
                this.sobrenome = sobrenome
            }

          const intance  = new construtor( "Pedro", "Lucas")
                console.log(intance)

// Class
                class Produto{
                  constructor(nome , preco){
                    this.nome = nome
                    this.preco = preco
                  }
                  calculaDesconto(){
                    return this.preco * 0.1
                  }
                
                } 

                  const Produto1 = new Produto('Blusa' , 250)
                  const Produto2 = new Produto("Calça" , 345)

                    console.log(Produto1)
                    console.log(Produto2)
                    