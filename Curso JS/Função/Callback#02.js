
 const notas = [ 7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

         // sem callback
         // o i eh indice
             let notasBaixas = []
                 for(let i in notas){
                     if(notas[i] < 7){
                        notasBaixas.push(notas[i])
                     }
                 }
                     console.log(notasBaixas)

                     // Com Callback
                          const   notasBaixas2 = notas.filter( function (nota){
                                 return nota<7
                             })

                             console.log(notasBaixas2)

                                 const Callback =  notas => notas <7
                                 const notasBaixas3 = notas.filter(Callback)
                                         console.log(notasBaixas3)

                  let Foo = function(){
                      this.a = 1
                      this.b = 2
                  }      

                    let bar = new Foo()
                        console.log(bar)