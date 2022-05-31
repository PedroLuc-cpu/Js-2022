class Curso{
    constructor(materia, professor, duracao){
        this.materia = materia
        this.professor = professor
        this.duracao = duracao
    }

    get prof(){
        return this.professor
    }
}
    let poo = new Curso("Javascript", "Rafaella", "1 semestre")
        console.log(poo.prof)

        //Nesse exemplo apenas utilizamos o getter para retornar um valor que já havia sido declarado de forma fixa.
         //E se quisermos agora retornar um valor dinâmico, como uma média de outras propriedades? Podemos fazer da seguinte forma:

         class Boletim{
             constructor(participacao, prova, trabalho){
                 this.participacao = participacao
                 this.prova = prova
                 this.trabalho = trabalho
             }

             get media(){
                 return parseInt((this.participacao + this.prova + this.trabalho) / 3)
             }
         }

         let BoletimSemestral = new Boletim(8 , 6 , 7.5)
              
         console.log(BoletimSemestral.media)

            function Analisar(){
                let BoletimDoterceiroSemestre = new Boletim(9.5,5,10)
                    if(BoletimDoterceiroSemestre.media>=7){
                        console.log("Aprovado")
                    } else{
                        console.log("Recuperação semestral")
                    }

            }
            Analisar()




            // treino 

                    class meuNome{
                        constructor(nome, sobremone, idade){
                            this.nome = nome
                            this.sobremone = sobremone
                            this.idade = idade
                        }
                            get GetNome(){
                                return `Olá, meu nome é ${this.nome} ${this.sobremone} e tenho ${this.idade} anos.`
                            }

                    }
                        let qualEseuNome = new meuNome("pedro" , "lucas" , 20)
                            console.log(qualEseuNome.GetNome)


                            
                            // AVISO IMPORTANTE
    //Pode ter um identificador do tipo numérico ou string.
    //Não deve ter nenhum parâmetro.
    //Não pode ser utilizado mais de um getter para uma mesma propriedade, assim como não pode haver uma propriedade comum com o mesmo nome do getter.