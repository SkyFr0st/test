function cal(){
    let number1  = document.getElementById("number1");
    let number2  = document.getElementById("number2");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value)+parseInt(number2.value);
    result.innerHTML = sum;
}

function del(){
    let number1  = document.getElementById("number1");
    let number2  = document.getElementById("number2");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value)-parseInt(number2.value);
    result.innerHTML = sum;
}

function mul(){
    let number1  = document.getElementById("number1");
    let number2  = document.getElementById("number2");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value)*parseInt(number2.value);
    result.innerHTML = sum;
}

function div(){
    let number1  = document.getElementById("number1");
    let number2  = document.getElementById("number2");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value)/parseInt(number2.value);
    result.innerHTML = sum;
}

function div1(){
    let number1  = document.getElementById("number1");
    let number2  = document.getElementById("number2");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value)%parseInt(number2.value);
    result.innerHTML = sum;
}

function squa(){
    let number1  = document.getElementById("number1");
    let number2  = document.getElementById("number2");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value)**parseInt(number2.value);
    result.innerHTML = sum;
}

function reset(){document.getElementById("result").value = ""}
