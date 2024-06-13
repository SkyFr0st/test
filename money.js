function mul(){
    let number1  = document.getElementById("number1");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value)*46.81;
    result.innerHTML = sum.toFixed(2);
}