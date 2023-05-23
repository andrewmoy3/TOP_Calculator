function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}

function operate(num1,num2,operator){
    switch(operator){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
        default:
            console.log("Error");
    }
}

function addEventListeners(){
    for(let i=1;i<10;i++){
        const button = document.getElementById(i);
        button.addEventListener("click",function(){
            updateDisplay(i);
        }
    )}

    document.getElementById("+").addEventListener("click",function(){
        updateDisplay("+");
    })
    document.getElementById("-").addEventListener("click",function(){
        updateDisplay("-");
    })
    document.getElementById("*").addEventListener("click",function(){
        updateDisplay("*");
    })
    document.getElementById("/").addEventListener("click",function(){
        updateDisplay("/");
    })
    document.getElementById("equal").addEventListener("click",function(){
        updateDisplay("=");
    })

    document.getElementById("C").addEventListener("click",function(){
        clearDisplay();
    })
}


var num1 = num2 = 0;
var operator;
var state = 1;
const display = document.getElementById("display");

function updateDisplay(num){

    switch(num){
        case "+":
            operator = num;
            state = 2;
            break;
        case "-":
            operator = num;
            state = 2;
            break;
        case "/":
            operator = num;
            state = 2;
            break;
        case "*":
            operator = num;
            state = 2;
            break;
        case "=":
            if(state == 2 && operator != 0){
                const result = operate(num1, num2, operator);
                display.textContent = result;
                num1 = result;
                num2 = 0;
                operator = 0;
            }
            break;
        default:
            if(state == 1){
                num1 = num1 * 10 + num;
                display.textContent = num1;
            }else if(state == 2){
                if(operator != 0){
                    num2 = num2 * 10 + num;
                    display.textContent = num2;
                }else{
                    clearDisplay();
                    num1 = num1 * 10 + num;
                    display.textContent = num1;
                }
            }
    }
}

function clearDisplay(){
    num1 = num2 = operator = 0;
    state = 1;
    display.textContent = "0";
}

addEventListeners();