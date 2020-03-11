let operand_1 = "";
let operand__2 = "";
let screen = document.getElementById("screen");
let flag = false;

//===== NUMBERS =================================
let zero = document.getElementById("zero");
zero.addEventListener("click", saveNumbers(0));

let one = document.getElementById("1");
one.addEventListener("click", saveNumbers(1));

let two = document.getElementById("2");
two.addEventListener("click", saveNumbers(2));

let three = document.getElementById("3");
three.addEventListener("click", saveNumbers(3));

let four = document.getElementById("4");
four.addEventListener("click", saveNumbers(4));

let five = document.getElementById("5");
five.addEventListener("click", saveNumbers(5));

let six = document.getElementById("6");
six.addEventListener("click", saveNumbers(6));

let seven = document.getElementById("7");
seven.addEventListener("click", saveNumbers(7));

let eight = document.getElementById("8");
eight.addEventListener("click", saveNumbers(8));

let nine = document.getElementById("9");
nine.addEventListener("click", saveNumbers(9));
//==============================================

//===== OPERANDS ===============================
let add = document.getElementById("add");
add.addEventListener("click", show);

let substract = document.getElementById("substract");
substract.addEventListener("click", show);

let multiply = document.getElementById("multiply");
multiply.addEventListener("click", show);

let divide = document.getElementById("divide");
divide.addEventListener("click",  show);

let squareRoot = document.getElementById("squareRoot");
squareRoot.addEventListener("click",  show);
//==============================================

//===== OTHERS =================================
let clear = document.getElementById("clear");
clear.addEventListener("click", show);

let equal = document.getElementById("equal");
equal.addEventListener("click", show);

let dot = document.getElementById("dot");
dot.addEventListener("click",  show);
//==============================================

//===== OPERATIONS =============================
function saveNumbers(number) {
    if(flag) {
        operand_2 += number;
    }else {
        operand_1 += number;
        zero.textContent = "ola";
        screen.textContent = operand_1;
    }
}
function addNumbers() {

}

function show() {

}
//==============================================