class Car{
    constructor(name){
        this.brand = name
    }
}

const mycar = new Car('Ford')

console.log(mycar)

//Uma class é um tipo de função, mas em vez de usar palavra-chave FUNCTION
//para iniciá-la, usamos a palavra-chave CLASS e as propriedade são atribuidas
// dentro de um constructor() que é um método