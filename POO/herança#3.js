String.prototype.reverse = function(){
    return this.split("").reverse().join("")
}
console.log("Pedro".reverse())

Array.prototype.first = function(){
    return this[0]
}
console.log([1,3,4,5].first())
