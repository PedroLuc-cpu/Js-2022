// const pessoa ={
//     saudacao: "Bom dia!",
//         falar(){
//             console.log(this.saudacao)
//         }
// }

// pessoa.falar()
// const falar = pessoa.falar
// falar()
// // conflito entre paradigmas: funcional e OO

// const FalarDePessoa  = pessoa.falar.bind(pessoa)

// FalarDePessoa()

// Praticando This e Bind() no Javascript
const Objeto = {
    Nome: "Pedro Lucas",
    Idade: 20,
    Profisao: "Front-End",
    Metodo(){
        console.log(this.Profisao)
    }   
}

// Objeto.Metodo()

// const ChamarMetodos = Objeto.Metodo  // Aqui gera conflito com a function e o Objeto por isso dar undefined
//     ChamarMetodos()

//         const ChamarMetodoComBind = Objeto.Metodo.bind(Objeto)
//             ChamarMetodoComBind()

//             // usando quando existe parametro

//             const OBJ = {
//                 MeuNome: "Pedro Lucas Santos",
//                 MetodoNumerosCalcular( n, n1){
//                    return   n + n1
//                 }
//             }

//                 console.log(OBJ.MetodoNumerosCalcular(10, 10))
            

//                 const usandoBind = OBJ.MetodoNumerosCalcular.bind(OBJ)

//                     console.log(usandoBind(20, 20))


const OO = {
    Nome: "Pedro",
    MeToDo(){
        console.log(this.Nome)
    }
}
OO.MeToDo()

    const CreatMetodo = OO.MeToDo
        CreatMetodo()

            const LigarMetodo = OO.MeToDo.bind(OO)

                LigarMetodo()