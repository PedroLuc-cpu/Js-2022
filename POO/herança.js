let ferrari ={
    modelo: "F40",
    velMax:342
}

    let volto ={
        modelo:"V40",
        velMax: 200
    }

        console.log(ferrari.__proto__)
        console.log(ferrari.__proto__ === Object.prototype)
        console.log(volto.__proto__ === Object.prototype)
        console.log(Object.prototype.__proto__)
        console.log(Object.prototype.__proto__ === null)

        function MeuObjeto(){}

        console.log(typeof Object , typeof MeuObjeto)
        console.log(Object.prototype, MeuObjeto.prototype)

        