// Litetal

// criado literalmente

let Microfone = {
    color: "Black",
    isOn:true
    ,toggleOnOff:function(){
        if(Microfone.isOn){
            console.log("Desligar")
        } else{
            console.log("Ligar")
        }

            Microfone.isOn = !Microfone.isOn 
    },
}

console.log(Microfone.toggleOnOff())
console.log(Microfone.toggleOnOff())
console.log(Microfone.color)

//pros = é simples de criar, simples de entender
