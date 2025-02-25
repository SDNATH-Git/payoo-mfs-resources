document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();
    const pin= document.getElementById('cashout-pin').value;
    const convertPin=parseFloat(pin);
    // console.log(convetPin);

    const cashout=document.getElementById('add-money').value;
    const convertCashout=parseFloat(cashout);
    // console.log(convertCashout);

    const balance=document.getElementById('balance').innerText;
    const convertbalance=parseFloat(balance);
    // console.log(convertbalance);

    if(convertPin === 1234){
        const sum = convertbalance - convertCashout ;
        document.getElementById('balance').innerText=sum;

    }
    else{
        alert('Valid pin');
    }

})