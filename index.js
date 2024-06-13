// x = 10;
//document.write(x)

function add(a,s,t,n){return a + s + t + n;}
function del(b,r,e,z){return b - r - e - z}
function mul(b,a,t,z){return b * a * t * z}
function div(a,n,e,t){return a / n / e / t}
function squa(a,n,e,t){return a ** n ** e ** t}
function div1(b,a,c,d){return b % a % c % d}

let sum = add(5,21,3,57);
let min = del(50,13,10,9);
let mult = mul(20,32,34,2);
let divide = div(50,5,3,2);
let squared = squa(2,2,2,2);
let divide1 = div1(8,6,4,2);

document.write("a + s + t + n " , " = " , sum);
document.write("<br> คำตอบ ", sum);

document.write("<br> b - r - e - z " , " = " , min);
document.write("<br> คำตอบ ", min);

document.write("<br> b * a * t * z " , " = " , mult);
document.write("<br> คำตอบ ", mult);

document.write("<br> a / n / e / t " , " = " , divide);
document.write("<br> คำตอบ ", divide);

document.write("<br> a ** n ** e ** t " , " = " , squared);
document.write("<br> คำตอบ ", squared);

document.write("<br> b % a % c % d " , " = " , divide1);
document.write("<br> คำตอบ ", divide1);

// function add(a,b,c,d){return a + b + c + d;}

// let sum = add(5,5,5,5);

// document.getElementById("p1").innerHTML = sum;

