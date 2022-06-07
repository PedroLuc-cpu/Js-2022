    // function apresentacao(){
    //         console.log(`Meu nome ${this.nome} e tenho ${this.ano} anos.`)
    // }
    //     const nameAge = {
    //         nome:"Pedro Lucas",
    //         ano:"20"
    //     }

    //         console.log(apresentacao.call(nameAge))

    //     // class extends , supet

    //         class animal{
    //             constructor(name, weight){
    //                 this.name = name
    //                 this.weight = weight
    //             }

    //             comer(){
    //                 return `${this.name} está comendo!
    //                 `
    //             }
    //             dorme(){
    //                 return `${this.name} estar dormindo`
    //             }

    //             acordar(){
    //                 return `${this.name} esta acordando`
    //             }
    //         }
    //             class gorilla extends animal{
    //                 constructor(name , weight){
    //                     super(name, weight)
    //                 }

    //             subiremárvores() {
    //                 return `${this.name} está subindo em árvores!`;
    //             }

    //             batePeito() {
    //                 return `${this.name} está batendo no peito!`;
    //             }

    //             mostrarVigor() {
    //                 return `${super.comer()} ${this.batePeito()}`;
    //             }

    //             rotinadiária() {
    //                 return `${super.acordar()} ${this.batePeito()} ${super.comer()} ${super.dorme()}`;
    //             }
    //             }
                

    //                             // instancia do OBEJETO
    //                         let Gorilla = new gorilla("George", "160KG")


    //                   console.log(Gorilla.batePeito())




            //////////////////// 
                

                    class pessoas{
                        constructor(name , sobrenome ,) {
                            this.name = name
                            this.sobrenome = sobrenome
                        }
                        }
                    

                      class pedroLucas extends pessoas{
                          constructor(name , sobrenome){
                            super(name, sobrenome,)
                          }
                          estudoTrabalho(estudar){
                              return `O ${this.name} ${this.sobrenome} quando chega do trabalho, ele gosta de estudar ${estudar}`
                          }
                          comendo(come){
                              if(come.length >= 20){
                                  return `ele essa comida não existe`
                              }else if(come.length < 5){
                                 return `essa comida tem menos de 5 caracteres` 
                              }
                              else{
                                return `O ${this.name} ${this.sobrenome} quando chega em casa ele agora comer ${come}`
                              }
                          }
                      }

                        let pedroLucaSantos = new pedroLucas("Pedro", "Lucas")
                            console.log(pedroLucaSantos.comendo("bolo de chocolate"))



                            let arrayMap = [2,4,6,8,10]
                              
                                  console.log(arrayMap.map((somar) => somar * 3).forEach((numbers, index) => console.log(`${index + 1}) ${numbers}`)))
                

                //Treinamento 03/06/2022
                      // Obs: Posso usar super() ou super. em function
                      
                      class getName{
                          constructor(name, lastname){
                              this.name = name
                              this.lastname = lastname
                          }
                          Jobs(){
                              return `Trabaha de Programador ` 
                          }
                      }

                        class PersonProcess extends getName{
                            constructor(name, lastname){
                                super(name , lastname)
                            }
                            DormeTrabalha(){
                                return `${this.name} ${this.lastname} ${this.Jobs()}`
                            }
                        }
                            let getingPerson = new PersonProcess("Pedro", "Lucas")
                                console.log(getingPerson.DormeTrabalha())


                                ///

                                class retangulo{
                                    constructor(altura, largura){
                                        this.altura = altura ; this.largura = largura
                                    }

                                    // getter = obter
                                        get Area(){
                                                return this.calcularArea()
                                            }
                                            calcularArea(){
                                                return this.altura * this.largura
                                            }

                                        }
                                         const calculando = new retangulo(5,5)
                                            console.log(calculando.calcularArea())   
                                