function Calculater(){
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);

    console.log(typeof(a),typeof(b));
    console.log('a + b = ',a+b)
    console.log('a - b = ',a-b)
    console.log('a * b = ' ,a*b)
    console.log('a / b = ',a/b)
    let item = "MrBeast chocolate";
    let price = 69;
    let quantity = 5;
    console.log(`you bought $(quantity) piece of $(item)when it was lunch .Price: $(price * quantity)dollar`);

} 