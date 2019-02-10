Number.prototype.Reverse = function(){
    return Number(this.toString().split("").reverse().join(""));
}

const num = 32;

console.log(num.Reverse());