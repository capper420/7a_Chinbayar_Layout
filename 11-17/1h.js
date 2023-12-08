function Multiply(){
    let num1 =document.getElementById('one').value;
    let num2 = document.getElementById('two').value;
    let answer = num1* num2 
    document.getElementById('answer').innerHTML = answer;
}
function Divide(){
    let num1 =document.getElementById('one').value;
    let num2 = document.getElementById('two').value;
    let answer = num1 / num2 
    document.getElementById('answer').innerHTML = answer;
}
function Plus(){
    let num1 = Number(document.getElementById('one').value);
    let num2 = Number(document.getElementById('two').value);
    let answer = num1 + num2 
    document.getElementById('answer').innerHTML = answer;
}
function Minus(){
    let num1 =document.getElementById('one').value;
    let num2 = document.getElementById('two').value;
    let answer = num1 - num2 
    document.getElementById('answer').innerHTML = answer;
}