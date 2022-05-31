// function Point(x, y){
//     this.x = x
//     this.y = y
// }
//     let myPoint = new Point()
//         console.log(myPoint.__proto__ == Point.prototype)
//         console.log(myPoint.__proto__.__proto__ == Object.prototype)
//         console.log(myPoint instanceof Point)
//         console.log(myPoint instanceof Object)

        /*Você pode encontrar instanceofrelacionamentos comparando prototypea cadeia de uma função com a de um objeto __proto__e 
        pode quebrar esses relacionamentos alterando prototype. */

        class Carro{
            constructor(tpCarro, tpComb){
                this.tipo = tpCarro
                this.qtdeComb = 100
                this.ligado= false
                this.tipoComb = tpComb
                
                this.gasoline = function(){
                    if(this.qtdeComb<50){
                        return `1`
                    }
                    else if(qtdeComb<5){
                      return `2`
                    }
                    else{
                       `3`
                    }
                }
                

            }
        }

        Carro.prototype.verificarCarro = function(){
            return `${this.tipo} seu combutivel é ${this.tipoComb} ${this.gasoline(100)}`
            
        }
        let Car =  new Carro("Ferrari" , "Etanol")
          console.log(Car)