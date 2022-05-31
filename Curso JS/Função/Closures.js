function init(){
    var name = 'MOZILA'
        function displayname(){
            console.log(name)
        }
        displayname()
}

init()


function makefunc(){
    var name  = "Olá, Mundo!"
        function displayname(){
            console.log(name)
        }

        return displayname
}

var myFunc = makefunc()

    myFunc()


    function makeAdder(x){
        return function(y){
            return x + y
        }
    }

    const add5 = makeAdder(5)
    const add10 = makeAdder(10)


            console.log(add10(2))
            console.log(add5(2))





            let nome = "Pedro"

                function pegarNome(){
                    let nome = "Lucas"
                        function Peguei(){
                            console.log(nome)
                        }

                        Peguei()
                }
                pegarNome()

         