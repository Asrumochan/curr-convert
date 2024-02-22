function logo_change(){
    var symbol=document.getElementById('symbol').value;
    console.log(symbol);
    if(symbol.includes('USA')==true){
        document.getElementById("logo").innerHTML='$';
        console.log(val1*83.0922);
    }
    else{
        document.getElementById("logo").innerHTML='₨';
    }
}
function change(){
    var symbol=document.getElementById('symbol').value;
    var symbol1=document.getElementById('symbol1').value;
    var val1=Number(document.getElementById('in').value);
    if(symbol.includes('USA')==true && symbol1.includes('IND') ==true){
        document.getElementById('display').style.height='100px';
        document.getElementById('display').style.marginLeft='80px';
        document.getElementById('display').style.width='100%';
        document.getElementById('content').style.height='400px';
        let res= `<br> <ul>
        <li class='text-gray-500'>${val1} US Dollars =</li>
        <li class='text-3xl'>${(val1*83.0922).toFixed(3)} Indian Rupees </li>
        <li  class='text-gray-500'>1 INR = 0.0120385 USD</li>
        <li  class='text-gray-500'>1 USD = 83.0668 INR</li>
    </ul>  `
        document.getElementById("display").innerHTML=res;
    }
    else if(symbol.includes('IND')==true && symbol1.includes('USA') ==true){
        document.getElementById('display').style.height='100px';
        document.getElementById('display').style.marginLeft='80px';
        document.getElementById('display').style.width='100%';
        document.getElementById('content').style.height='400px';
        let res= `<br> <ul>
        <li class='text-gray-500'>${val1} Indian Rupees=</li>
        <li class='text-3xl'>${(val1/83.0922).toFixed(3)}  US Dollars </li>
        <li  class='text-gray-500'>1 INR = 0.0120385 USD</li>
        <li  class='text-gray-500'>1 USD = 83.0668 INR</li>
    </ul>  `
        document.getElementById("display").innerHTML=res;
    }
    else{
        alert('Enter another currency to convert')
    }
}
function reverse_val(){
    var symbol=document.getElementById('symbol').value;
    var symbol1=document.getElementById('symbol1').value;
    var temp=document.getElementById('symbol').value;
    document.getElementById('symbol').value=symbol1;
    document.getElementById('symbol1').value=temp;
    if(document.getElementById('symbol').value.includes('USA')==true){
        document.getElementById("logo").innerHTML='$';
    }
    else{
        document.getElementById("logo").innerHTML='₨';
    }
}