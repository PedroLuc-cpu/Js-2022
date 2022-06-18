const arrayObject = [{nome:"João", idade:19},{nome:"Pedro", idade:20},]
    let arrayObjectMap = arrayObject.map(function(object) { return  object.idade; });
        console.log(arrayObjectMap.map((somar)=> console.log(somar * 3)))

      
      
        let arrayObjectNames = arrayObject.map(function(object) { return  object.nome; });        
const arraylist = arrayObjectNames.forEach(function(nome, index){
    return console.log(`${index +1}) ${nome}`)
})
    console.log(arraylist)



    