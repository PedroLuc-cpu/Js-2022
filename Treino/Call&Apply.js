const person = {
    fullname(){
       return this.firstName + " " + this.lastName 
    }
}

const person1 = {
    firstName: " Pedro",
    lastName: "Lucas"
}

const person2 = {
    firstName: "Eline",
    lastName: "Ester"
}

console.log(person.fullname.call(person1))
console.log(person.fullname.call(person2))

/////////////////////////////////////////////////////////////q

const obj = {name:"Pedro"}

let greeting = function(a , b){
    return `${a} ${this.name}, ${b}`
}

console.log(greeting.call(obj, "Hello", "How are you?"))
console.log(greeting.apply(obj, ["Hello", "How are you?"]))


/////////////////////////////////////////////////////


function juntaNames(){
    return `${this.Nome} ${this.Sobrenome}`
}

const Pessonagem1 = {
    Nome: "Maria",
    Sobrenome: "Cabral"
}

const Pessonagem2 = {
    Nome: "João",
    Sobrenome: "Damares"
}

console.log(juntaNames.call(Pessonagem1))
console.log(juntaNames.call(Pessonagem2))







/////////////////////////////////////

let myName = {
    ome: "João"
    ,brenome:"Algusto"
}

function pegarFullNome(wellcome , apresent){
    return `${wellcome} ${this.ome} ${this.brenome}, ${apresent}`
}

console.log(pegarFullNome.apply(myName, ["Oi", "Tudo Joia?"]))