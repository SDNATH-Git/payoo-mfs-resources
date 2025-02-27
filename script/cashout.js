// document.getElementById("cashout-btn").addEventListener('click',function(event){
//     event.preventDefault();
//     const pin= document.getElementById('cashout-pin').value;
//     const convertPin= parseInt(pin);
//     // console.log(convetPin);

//     const cashout=document.getElementById('withdraw-money').value;
//     const convertCashout=parseFloat(cashout);
//     // console.log(convertCashout);

//     const balance=document.getElementById('balance').innerText;
//     const convertbalance=parseFloat(balance);
//     // console.log(convertbalance);

//     if(convertPin === 1234){
//         const sum = convertbalance - convertCashout ;
//         document.getElementById('balance').innerText = sum;

//     }
//     else{
//         alert('Valid pin');
//     }

// })

document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();
    const agentNumber = document.getElementById('input-number2').value ;

    const amount = getVlaueInput('withdraw-money');
    const pin = getVlaueInput('pin');
    const balance = getInnerText('balance');

    if(amount > balance){
        alert('Invailed');
        return;
    }

    if(agentNumber.length === 11){
        if(pin === 1234){
            const sum = balance - amount;
            setValue('balance',sum);

            //Transaction added
            const transactionContainer = document.getElementById('transaction-container');

            const p = document.createElement("p");
            p.innerText= `
            Cashout ${amount}tk form this ${agentNumber} Agent Number.
            `
            transactionContainer.appendChild(p);
        }
        else{
            alert('Invailed pin');
        }

    }
    else{
        alert('11 Digts Agent Number');
    }

})