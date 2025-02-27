// document.getElementById('money-btn').addEventListener('click',function(event){
//     event.preventDefault();
//     const addMoney=document.getElementById('add-money').value;
//     const convertMoney=parseFloat(addMoney);
//     // console.log(typeof(convertMoney));

//     const pin=document.getElementById('pin').value ;
//     const converPin=parseInt(pin);
//     // console.log(typeof(converPin));

//     const balance= document.getElementById('balance').innerText ;
//     const converBalance=parseFloat(balance);
//     // console.log(typeof(converBalance));

//     if(converPin === 1234){
//         const sum = converBalance + convertMoney ;
//         document.getElementById('balance').innerText= sum ;
//     }
//     else{
//         alert('Valid pin plase');
//     }

// })



document.getElementById("money-btn").addEventListener("click",function(event){
    event.preventDefault();

    const addMoney =  getVlaueInput('add-money');
    const pin = getVlaueInput('pin');
    const accountNumber = document.getElementById("input-number").value;
    const balance = getInnerText('balance');

    if(addMoney < 0){
        alert('Invailed Money');
        return ;
    }

    if(accountNumber.length === 11){
        if(pin === 1234){
            const sum = balance + addMoney ;
            setValue('balance',sum);
            // document.getElementById('balance').innerText= sum ;

            // Transaction added money 
            const transactionContainer = document.getElementById('transaction-container');

            const p = document.createElement("p");
            p.innerText = `
            Added ${addMoney}tk for this ${accountNumber} Account Number.
            `
            transactionContainer.appendChild(p);
        }
        else{
            alert('Enter a 4 Digt pin');
        }
    }
    else{
        alert('11 Digt Account Number plase');
    }



    


})