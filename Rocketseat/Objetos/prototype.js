// Prototype
// Usada mais quando vem função para deixar o codigo mais limpo
// se criar uma função dentro da função principal, ela será repetida
        function Microfone(color = "Black"){
            this.color = color
            this.isOn = true
        }
        Microfone.prototype.toggleOnOff = function(){
            if(Microfone.isOn){
                console.log("Desligar")
            } else{
                console.log("Ligar")
            }
            this.isOn = !this.isOn
 }
        const microfone =  new Microfone()
            console.log(microfone)

            const microfone2 = new Microfone("White")
                console.log(microfone2)
            
                console.log(microfone2.toggleOnOff())