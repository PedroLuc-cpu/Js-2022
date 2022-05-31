class avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
    class pai extends avo{
        constructor(sobrenome , profissao = 'Programador'){
            super(sobrenome)
            this.profissao = profissao
        }
    }

    class filho extends pai{
        constructor(){
            super("Santos")
        }
    }

        const Filho  = new filho
            console.log(Filho)