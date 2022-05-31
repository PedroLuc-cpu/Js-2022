// usando a notação literal
    const obj1  ={}

    // Object em JS
        const obj2 = new Object
            // Função construtoras
                function Produtos(nome , preco, desc){
                    this.nome = nome
                    this.getPrecoComDesconto =()=>{
                        return preco *(1 - desc)
                    }
                }
                const p1 = new Produtos("Caneta" , 7.99, 0.15)
                    console.log(p1.getPrecoComDesconto())

                    // Função factory
                        function CriarFuncionarios(nome, SalarioMinimo, faltas){
                            return{
                                nome,
                                SalarioMinimo,
                                faltas,
                                getSalario(){
                                    return (SalarioMinimo / 30) * (30 - faltas)
                                }
                            }
                        }
                const f1 = CriarFuncionarios("João", 1212, 3)
                        console.log(f1.getSalario())

                        // Objetos.create
                            const filha = Object.create(null)
                            filha.name = "Ana"
                                console.log(filha)

                                // uma função famosa que retorna Objeto...
                                    const fromJSON = JSON.parse('{"infor":"Sou um Json"}')
                                    console.log(fromJSON.infor)