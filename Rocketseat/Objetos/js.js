
    function Clicar(){
        let corpo = document.getElementById('corpo')
        corpo.style.margin = '0'
        corpo.style.padding  ='0'
        let div = document.getElementById("smg")
            div.style.fontSize = "3rem"
            div.style.color = "#f2f2f2"
            div.style.textAlign = "center"
            div.style.background ="#1a1a1a"
            div.style.padding = '2rem 0 2rem 0'
            
            
    }
    Clicar()


    function CaracterCCar(colocarNeutro =false, colocarKEY=false , ligarCar=false){
        this.colocarNeutro = colocarNeutro
        this.colocarKEY = colocarKEY
        this.ligarCar = ligarCar
        this.view = document.getElementById("view")
            // estilize 
                this.view.style.textAlign = "center"
                this.view.style.padding = "2rem 0 0 0"
                this.view.style.fontFamily = "arial"
                this.view.style.fontSize = '1.6rem'
      }
          CaracterCCar.prototype.ligandoCar = function(){
              if(this.colocarNeutro && this.colocarKEY && this.ligarCar){
                this.view.innerHTML = "O CARRO LIGOU!!!"
              }
              else{
                this.view.innerHTML = "O CARRO MORREU!!!"
              }
          }
              let teste1 = new CaracterCCar(true ,true,true)
                  console.log(teste1.ligandoCar())

    
                  function centralizar(){
                      let center = document.getElementById("formcenter")
                        center.style.margin = "0 0 0 5rem"
                  }
                  centralizar()





                        function dates(){
                            let getNome = document.getElementById("nome")
                            let getSobrenome = document.getElementById("sobrenome")
                            let resultado = document.getElementById("res")
                            let nameWhite = document.getElementById("name")
                                
                                // condições 
                                    if(getNome.value.length <10 || getSobrenome.value<10){
                                        resultado.innerHTML = "vc digitou menos de 10 caracteres"
                                       
                                    }
                                    else{
                                        resultado.innerHTML ="conectando....."
                                         nameWhite.innerHTML = `${getNome.value} ${getSobrenome.value}`
                                    }

                        }
                        