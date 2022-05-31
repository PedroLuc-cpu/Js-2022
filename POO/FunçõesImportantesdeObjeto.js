const pessoa ={
    nome: "Pedro",
    idade: 20,
    peso: 72
}
    console.log(Object.keys(pessoa))
    console.log(Object.values(pessoa))
    console.log(Object.entries(pessoa))
  
    Object.entries(pessoa).forEach(([chave , valor])=>{
        console.log(`${chave}: ${valor}`)
    })


    Object.defineProperty(pessoa , "dataNascimento",{
        enumerable: true,
        Writable:false,
        value:"01/01/2019"
    })
    pessoa.dataNascimento = "01/01/2017"
    console.log(pessoa.dataNascimento)
    console.log(Object.keys(pessoa))




    // Object.assing (ECMAScripf 2015)
    let destino = {a:1}
    let orirem = {b:2, c:3, d:4, e:5}
        let concat = Object.assign(destino, orirem)
            console.log(concat)