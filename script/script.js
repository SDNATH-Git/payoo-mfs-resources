document.getElementById('login-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    const inputNumber=document.getElementById('input-number').value;
    const pin=document.getElementById('pin').value
    const pinNumber=parseInt(pin)

    if(inputNumber.length === 11 && pinNumber === 1234){
        window.location.href="./main.html";
    }
    else{
        alert('need value');
        
    }
 

})