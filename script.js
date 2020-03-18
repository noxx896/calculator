let operation = "";
let screen = document.getElementById("screen");


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
clear.addEventListener("click", clearAll);

let erase = document.getElementById("erase");
erase.addEventListener("click",  deleteNumber);

let equal = document.getElementById("equal");
equal.addEventListener("click", showResult);
//==============================================

//===== OPERATIONS =============================
function saveNumbers(a) {
        screen.textContent += a;
        operation += a;
}
function clearAll() {
    operation = "";
    screen.textContent = "";
}
function deleteNumber() {
    operation = operation.slice(0, -1);
    screen.textContent = operation;
}
function showResult() {
    let expression = [];
    let aux = "";
    let flag = true;
    for(i = 0; i < operation.length; i++) { // loop to separate numbers and math expressions
        if(operation[i] != "+" && operation[i] != "-" && operation[i] != "/" && operation[i] != "x") {
            aux += operation[i];
        }else {
            expression.push(aux);
            expression.push(operation[i]);
            aux = "";
        }
    }
    expression.push(aux);

    for(i = 0; i < expression.length; i++) { // loop to show if the input expression is invalid
        if(expression[i] == "") return console.log("Syntax error");
    }
    console.log(expression);

    do {
        /*expression.forEach(function(item) {
            if(item == "x") {
                expression[expression.indexOf("x")] = expression[expression.indexOf("x")-1]*expression[expression.indexOf("x")+1];
               // expression.splice(expression.indexOf("x")-1, 1);
                //expression.splice(expression.indexOf("x")+1, 1);
            }else if(item == "/") {
                expression[expression.indexOf("/")] = expression[expression.indexOf("/")-1]/expression[expression.indexOf("/")+1];
               // expression.splice(expression.indexOf("/")-1, 1);
               // expression.splice(expression.indexOf("/")+1, 1);
            }else flag = false;
        }
        )*/
        let a = 0;
        expression[expression.indexOf("x")] = expression[expression.indexOf("x")-1]*expression[expression.indexOf("x")+1];
        a = expression.indexOf("x");
        expression.splice(a-1, 1);
        expression.splice(a+1, 1);
        if(expression.indexOf("x") == -1) flag = false;

    }while(flag)

    console.log(expression);
}
//==============================================