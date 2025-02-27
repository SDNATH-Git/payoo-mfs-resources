function getVlaueInput(id){
    const value= document.getElementById(id).value;
    const convertValue = parseFloat(value);
    return convertValue ; 
}

function getInnerText(id){
    const value = document.getElementById(id).innerText;
    const convertValue = parseFloat(value);
    return convertValue;
}

function setValue(id,value){
    document.getElementById(id).innerText= value;
}