//Objeto Literal como retorno
//contra: recriação de função internas


function createMicrofone(color){
   let isOn = true

    return {
        color: color,
        isOn
        ,toggleOnOff:function(){
        if(Microfone.isOn){
            console.log("Desligar")
        } else{
            console.log("Ligar")
        }
          isOn = !isOn 

         
    }


    }
        return {
            color , toggleOnOff
        }

}

let microfoneBlack = createMicrofone("Black")
let MicrofoneWhite = createMicrofone("white")
console.log(microfoneBlack.color)
console.log(MicrofoneWhite.color)


function criarMicrofone(cor, numeroSerie, modelo, marcar){
    return{
        cor, 
        numeroSerie,
        modelo,
        marcar,
        white: function(){
            return `Microfone cor ${cor}, numero de serie ${numeroSerie}, com modelo ${modelo} da marca ${marcar}`
        }    
    }
}

let microfoneSamsung = criarMicrofone("Escuro", 192168122, "XRG", "Samsung")
    console.log(microfoneSamsung.white())

    let microfoneXiaomi = criarMicrofone("Cinza" , 1234564, "Redmi", "Xiaomi")
        console.log(microfoneXiaomi.white())

        