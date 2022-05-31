 function Pessoas() {
     this.Idade = 0  // this normal

     const self = this     // this dentro de uma cosntante para nao conflito adiante do codigo

     setInterval(function(){
         self.Idade++
         console.log(self.Idade)
     }/*.bind(this)*/ , 3000)
 }

new Pessoas