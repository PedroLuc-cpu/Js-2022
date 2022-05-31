const a = 1
const b = 2
const c = 3

    const objt1 ={a: a , b: b , c:c}
// esse tipo de duplicidade não mais necessario hoje em dia


    // forma mais atualizada

        const objt2 = {a , b, c}

        console.log( objt1 , objt2)


        // Objeto Literal

        const nomeAtt = "NOTA"
            const valorAtt = 7.87

            const objt3 = {}
            objt3[nomeAtt] = valorAtt
                console.log(objt3)

                const obj4 ={[nomeAtt]: valorAtt}
                console.log(obj4)

                    const obj5 = {
                        funcao1: function(){
                            //....
                        },
                            funcao2(){
                                //....
                            }
                    }

                        console.log(obj5)

