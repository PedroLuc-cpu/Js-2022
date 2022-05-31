//Não é igual class de linguagem orientada a objeto
// Clareza visual
// ele é mais prototipo que orientação objeto

// class Microfone{
//     constructor(color = "Black"){
//         this.color = color
//         this.isOn = true
//     }
//     toggleOnOff = function(){
//         if(Microfone.isOn){
//             console.log("Desligar")
//         } else{
//             console.log("Ligar")
//         }
//         this.isOn = !this.isOn
//     }
// }
// let microfone  = new Microfone("White")
//     console.log(microfone)
//     console.log(microfone.toggleOnOff())



    //////////////////

        class caracterCar{
            constructor(nomeCar, cor, fabricante, ano){
                this.nomeCar = nomeCar
                this.cor = cor 
                this.fabricante = fabricante
                this.ano = ano
            }
                applyCar = function(){
                    return `${this.nomeCar} cor ${this.cor}, da fabricante ${this.fabricante} ano ${this.ano}`
                }

                  carGO = function(carNeutro = false, colocarkey =false, darPartida){
                        if(carNeutro && colocarkey){ 
                            console.log(`Carro ${darPartida} `)
                        }
                        else{
                            console.log(`Carro Morreu`)
                        }

                    }

        }
            let CarFord = new caracterCar("Ford" , "prata" , "Ford ilimitada" , 2022)
                console.log(CarFord.applyCar())
                  
                let CarOFFon = new caracterCar
                    console.log(CarOFFon.carGO(1,1,"Ligou"))
                    

                    ///////////////////

// user  prototype

            function CaracterCCar(colocarNeutro =false, colocarKEY=false , ligarCar=false){
              this.colocarNeutro = colocarNeutro
              this.colocarKEY = colocarKEY
              this.ligarCar = ligarCar
            }
                CaracterCCar.prototype.ligandoCar = function(){
                    if(this.colocarNeutro && this.colocarKEY && this.ligarCar){
                        console.log("LIGOU")
                    }
                    else{
                        console.log("MORREU")
                    }
                }
                    let teste1 = new CaracterCCar(true ,true,true)
                        console.log(teste1.ligandoCar())
                  
