class Header{
    constructor(){
        this.color = "Red";

    }

    changeColor = function(){
        document.getElementById("demo").innerHTML += this;
        
    }
}

const myheader = new Header();

window.addEventListener("load", myheader.changeColor);

document.getElementById("btn").addEventListener("click", myheader.changeColor)

