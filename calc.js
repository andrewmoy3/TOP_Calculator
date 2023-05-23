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
    if(num2 == 0){
        return "oops";
    }
    let number = Number((num1/num2).toFixed(6));
    let truncated = parseFloat(number.toFixed(10)).toString();
    truncated = truncated.indexOf('.') !== -1 ? truncated.replace(/\.?0+$/, '') : truncated;

    return Number(truncated);
   
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
    for(let i=0;i<10;i++){
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
    document.getElementById("negate").addEventListener("click",function(){
        updateDisplay("negate");
    })
    document.getElementById(".").addEventListener("click",function(){
        updateDisplay(".");
    })

    document.getElementById("C").addEventListener("click",function(){
        clearDisplay();
    })
}


var num1, num2, operator, state, decimal;
const display = document.getElementById("display");

function updateDisplay(num){

    switch(num){
        case "+":
            operator = num;
            state = 2;
            decimal = false;
            break;
        case "-":
            operator = num;
            state = 2;
            decimal = false;
            break;
        case "/":
            operator = num;
            state = 2;
            decimal = false;
            break;
        case "*":
            operator = num;
            state = 2;
            decimal = false;
            break;
        case "=":
            if(state == 2 && operator != 0){
                const result = operate(num1, num2, operator);
                display.textContent = result;
                num2 = 0;
                operator = 0;
                if (typeof result === "number") {
                    decimal = false;
                    num1 = result;
                }else{
                    decimal = false;
                    state = 1;
                    num1 = 0;
                }
            }
            break;
        case "negate":
            if(state == 1){
                num1 *= -1;
                display.textContent = num1;
            }else if(state == 2){
                num2 *= -1;
                display.textContent = num2;
            }
            break;
        case ".":
            if(decimal == false){
                if(state == 1){
                    display.textContent = num1 + ".";
                }else if(state == 2){
                    if(operator != 0){
                        display.textContent = num2 + ".";
                    }else{
                        clearDisplay();
                        display.textContent = num1 + ".";
                    }
                }
            }
            
            decimal = true;
            break;
        default:
            if(state == 1){
                if(decimal == false){
                    if(num1 < 1000000){
                        num1 = num1 * 10 + num;
                        display.textContent = num1;
                    }
                }else if(decimal == true){
                    let numDecimals = String(num1).split('.')[1];
                    numDecimals = numDecimals ? numDecimals.length + 1 : 1;
                    num1 = num1 + num / (10**(numDecimals));
                    num1 = Number(num1.toFixed(numDecimals));
                    display.textContent = num1;
                }
            }else if(state == 2){
                if(operator != 0){
                    if(decimal == false){
                        if(num2 < 1000000){
                            num2 = num2 * 10 + num;
                            display.textContent = num2;
                        }
                    }else if(decimal == true){
                        let numDecimals = String(num2).split('.')[1];
                        numDecimals = numDecimals ? numDecimals.length + 1 : 1;
                        num2 = num2 + num / (10**(numDecimals));
                        num2 = Number(num2.toFixed(numDecimals));
                        display.textContent = num2;
                    }
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
    decimal = false;
    state = 1;
    display.textContent = "0";
}

addEventListeners();
clearDisplay();