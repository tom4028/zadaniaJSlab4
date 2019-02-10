String.prototype.Reverse = function(){
    return this.toString().split("").reverse().join("");
}

const str ="Bundy";

console.log(str.Reverse());

