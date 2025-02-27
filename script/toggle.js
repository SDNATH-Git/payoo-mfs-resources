// // button control 

// document.getElementById("cashout-section").style.display= "none";

// // addMONEY BUTTON CONTROL 
// document.getElementById("addMoney").addEventListener('click',function(){
//     document.getElementById("addMoney-section").style.display="block";
//     document.getElementById("cashout-section").style.display="none";
// })

// // CASHOUT BUTTON CONTROL 
// document.getElementById("cashout").addEventListener('click',function(){
//     document.getElementById("addMoney-section").style.display = 'none';
//     document.getElementById("cashout-section").style.display = 'block';
// })


// button control
document.getElementById('cashout-section').style.display = 'none';
document.getElementById('transction').style.display = 'none';

// add money button
document.getElementById('addMoney').addEventListener('click',function(){
    handleToggle('addMoney-section','block');
    handleToggle('cashout-section','none' );
    handleToggle('transction','none')
})

// cahout button
document.getElementById('cashout').addEventListener('click',function(){
    handleToggle('addMoney-section','none');
    handleToggle('cashout-section','block');
    handleToggle('transction','none')
})

// transction button
document.getElementById('transction-box').addEventListener('click',function(){
    handleToggle('transction','block');
    handleToggle('addMoney-section','none');
    handleToggle('cashout-section','none' );
})



// function 
function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}
