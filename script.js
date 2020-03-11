let operand_1 = "";
let operand__2 = "";
let screen = document.getElementById("screen");
let flag = false;


//===== NUMBERS =================================
let numbers = ["zero", "1", "2", "3", "4", "5", "6", "7", "8", "9", "dot"];
numbers.forEach(element => {
    document.getElementById(element).addEventListener("click", () => {
        saveNumbers(element);
    })
})
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
//==============================================

//===== OTHERS =================================
let clear = document.getElementById("clear");
clear.addEventListener("click", show);

let erase = document.getElementById("erase");
erase.addEventListener("click",  show);

let equal = document.getElementById("equal");
equal.addEventListener("click", show);
//==============================================

//===== OPERATIONS =============================
function saveNumbers(number) {
        screen.textContent += number.toString();
}
function addNumbers(e) {
    screen.textContent += "Works 2";
}

function show() {
    screen.textContent += a;
}
//==============================================