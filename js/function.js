// function.js
function plus(){
    let i1 = document.getElementById('num1');    // input
    let i2 = document.getElementById('num2');
    let result = document.getElementById('result');
    result.value = sum(parseInt(i1.value), parseInt(i2.value));
}


function sum(v1, v2) {
    return v1 + v2;     // string + => concatenate.
}

var fnc = function sum(v1, v2){
    return v1 + v2;
}

console.log(sum('10', 20));
console.log(fnc(10, 20, 30));