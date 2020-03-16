let operation = "";
let screen = document.getElementById("screen");
let flag = false;


//===== NUMBERS =================================
let numbers = ["zero", "1", "2", "3", "4", "5", "6", "7", "8", "9", "dot"];
numbers.forEach(element => {
    document.getElementById(element).addEventListener("click", () => {
        saveNumbers(document.getElementById(element).textContent);
    })
})
//==============================================

//===== OPERANDS ===============================
let add = document.getElementById("add");
add.addEventListener("click", () => {
    saveNumbers("+");
});

let substract = document.getElementById("substract");
substract.addEventListener("click", () => {
    saveNumbers("-");
});

let multiply = document.getElementById("multiply");
multiply.addEventListener("click", () => {
    saveNumbers("x");
});

let divide = document.getElementById("divide");
divide.addEventListener("click", () => {
    saveNumbers("/");
});
//==============================================

//===== OTHERS =================================
let clear = document.getElementById("clear");
clear.addEventListener("click", show);

let erase = document.getElementById("erase");
erase.addEventListener("click",  deleteNumber);

let equal = document.getElementById("equal");
equal.addEventListener("click", showResult);
//==============================================

//===== OPERATIONS =============================
function saveNumbers(a) {
        screen.textContent += a.toString();
        operation += a.toString();
}
function clearAll() {
    screen.textContent += "Works 2";
}
function deleteNumber() {
    operation = operation.slice(0, -1);
    screen.textContent = operation;
}
function show() {
    screen.textContent += "show";
}

function showResult() {
    do {
        for(i = 0; i < operantion.length; i++) {
            
        }
    }while(isNaN(operantion));
}
//==============================================