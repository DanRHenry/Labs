function divisible(firstNum, secondNum) {
  // add your code here
if(firstNum % secondNum == 0) {
    return('True');
} else {return('False')};
}

console.log(divisible(100, 10))  // should print true
console.log(divisible(99, 12))   // should print false
console.log(divisible(100, 7))   // should print false
console.log(divisible(3333, 11)) // should print true
console.log(divisible(3333, 11)) // should print true
console.log(divisible(3333, 11)) // should print true


// Do not change below this line
module.exports = { divisible };
