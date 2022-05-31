



                for(let c = 0 ; c < 10; c++){
                    console.log(c)
                }



                        const DADOSPESSOAIS = {
                            Nome: "Pedro Lucas",
                            Idade: 20,
                            Altura: 1.70,
                            Dados(){
                                console.log(`Olá ${this.Nome}`)
                            }
                            
                        }

                            const Funcao = DADOSPESSOAIS.Dados

                                    Funcao()

                                        const ThisDefinid = DADOSPESSOAIS.Dados.bind(DADOSPESSOAIS)

                                                ThisDefinid()
                                        

                              