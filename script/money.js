document.getElementById('money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney=document.getElementById('add-money').value;
    const convertMoney=parseFloat(addMoney);
    // console.log(typeof(convertMoney));

    const pin=document.getElementById('pin').value ;
    const converPin=parseFloat(pin);
    // console.log(typeof(converPin));

    const balance= document.getElementById('balance').innerText ;
    const converBalance=parseFloat(balance);
    // console.log(typeof(converBalance));

    if(converPin === 1234){
        const sum = converBalance + convertMoney ;
        document.getElementById('balance').innerText= sum ;
    }
    else{
        alert('Valid pin plase');
    }


})