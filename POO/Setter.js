class Aluno {
    constructor(nome, curso , semestre){
        this.nome = nome
        this.curso = curso
        this.semestre = semestre

    }
        set nomeAluno(nomeAluno){
            this.nome = nomeAluno
        }
}

let lucas = new Aluno("" , "Orientação Objeto" , 4)
    lucas.nomeAluno = "Pedro Lucas"
        console.log(lucas.nome)


        //Agora podemos tanto acessar as propriedades de um objeto (com getters), quanto alterar os valores dela (com setters).

        class Alunos{
            constructor(nomes, curso , semestre){
                this.nomes = nomes
                this.curso = curso
                this.semestre = semestre

            } 
            get nomeAlunos(){
                return this.nomes
            }
                set nomeAlunos(nomeAlunos){
                    this.nomes = nomeAlunos
                }
        }

            let Pedro = new Alunos("", "Programação", 5)

                console.log(Pedro.nomeAlunos)
                    Pedro.nomeAlunos  = "Pedro"
                        console.log(Pedro.nomes)