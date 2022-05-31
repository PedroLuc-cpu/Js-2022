let compararComThis = function (param){
    console.log(this=== param)
}

compararComThis(globalThis)


const obt ={}

    compararComThis = compararComThis.bind(obt)
        compararComThis(globalThis)
        compararComThis(obt)


        let compararComThisArrow = param => console.log(this ===param)

        compararComThisArrow()

        // compararComThisArrow(module.exports)