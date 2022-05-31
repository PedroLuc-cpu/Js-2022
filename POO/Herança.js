Object.prototype.atributo0 = `Não encotramos nada na sua herança tente.`
const avo = {atributo1: "Olhos azuis"}
const pai ={__proto__: avo, atributo2:"Cabelo Loiro"}
const filho ={__proto__: pai, atributo3:"Branco"}
        console.log(filho.atributo1, filho.atributo2 , filho.atributo3)

        ///////////////////

        const carro ={
            velAtual: 0
            ,velMax:200,
            acelerarMais(delta){
                if(this.velAtual +delta <= this.velMax){
                    this.velAtual += delta
                }else{
                    this.velAtual = this.velMax
                }
            },
            status(){
                return `${this.velAtual}Km/h de ${this.velMax}Km/h`
            }
        }

        const ferrari = {
            modelo:"F40",
            velMax: 324 //shadowing
        }

        const volvo = {
            modelo: 'V40'
            ,status(){
                return `${this.modelo}: ${super.status()}`
            }
        }
        Object.setPrototypeOf(ferrari, carro)
        Object.setPrototypeOf(volvo, carro)
            console.log(ferrari)
            console.log(volvo)

            volvo.acelerarMais(100)
            console.log(volvo.status())