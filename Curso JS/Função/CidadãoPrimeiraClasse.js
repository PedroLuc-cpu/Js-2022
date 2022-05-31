// Função em  JS é Firsr-class Object (Citizens)
// Higher-Order function

// função literal
    function fun1(){
        
    }
// Armazenar em uma variável
const fun2= function(){}


//armazenar em uma ARRAY
    const array =[function(a ,b){
        return a + b
    }, fun1 ,fun2]
    console.log(array[0](2,3))

// armazenar em atributo de objeto
const Obj={}
Obj.falar=function(){
    return 'Opa'
}

console.log(Obj.falar())

// passar função como parametro
    function run(fun){
        fun()
    }

    run(function(){
        console.log('Executando...')
    })
// uma Função pode retornar/conter um função

function soma(a, b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
//usando uma variavel
const CincoMais = soma(2,3)
CincoMais(4)
//
