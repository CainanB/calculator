var numbers = document.querySelectorAll(".number");
var operators = document.querySelectorAll(".operator");
var inputField = document.querySelector(".input");
var equalButton = document.querySelector(".equal");
var clearButton = document.querySelector("#clear");

console.log(numbers);
var numString = "";
Array.from(numbers).map(function(currentButton){
    currentButton.addEventListener('click',bClick);
    
});
Array.from(operators).map(function(currentButton){
    currentButton.addEventListener('click',bClick);
});

clearButton.addEventListener('click', clear);
equalButton.addEventListener('click', calcTotal)

function bClick(e){
    console.log(e.target.textContent);
    numString += e.target.textContent;
    inputField.textContent = numString;
}

function clear(e){
    inputField.textContent = "";
    numString = "";
}

function calcTotal(e){

    // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
var numbers = numString.split(/\+|\-|\*|\//g);
// var numbers = numString.split(/[\+\-\*\/]+/);

// forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
// first we replace all the numbers and dot with empty string and then split
var operators = numString.replace(/[0-9]|\./g, "").split("");


console.log(numString);
console.log(operators);
console.log(numbers);

// 10+5+4/2
//[+,+,/]
//[10,5,4,2]

10+5+4
[+,+]
[10,5,2]
var divide = operators.indexOf("/");
while (divide != -1) {
  numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
  operators.splice(divide, 1);
  divide = operators.indexOf("/");
}

var multiply = operators.indexOf("*");
while (multiply != -1) {
  numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
  operators.splice(multiply, 1);
  multiply = operators.indexOf("*");
}

var subtract = operators.indexOf("-");
while (subtract != -1) {
  numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
  operators.splice(subtract, 1);
  subtract = operators.indexOf("-");
}

var add = operators.indexOf("+");
while (add != -1) {
  // using parseFloat is necessary, otherwise it will result in string concatenation :)
  numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
  operators.splice(add, 1);
  add = operators.indexOf("+");
}
inputField.textContent = numbers[0];
numString = "";
}












// var string = "6 * 8 + 4 * 3.5";

// var numArray =
// console.log(eval(string));
