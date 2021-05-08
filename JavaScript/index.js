//Jordan Schulte
//Query Selectors
const billValue = document.getElementById("billValue");
const tipValue = document.getElementById("tipValue");
const perPersonValue = document.getElementById("perPersonValue");
const btnCalculate = document.getElementById("btnCalculate");
const btnClear = document.getElementById("btnClear");
const appendTip = document.getElementById("appendTip");
const appendTotal = document.getElementById("appendTotal");
const perPerson = document.getElementById("appendPerson");

//Calculate button
btnCalculate.addEventListener("click", () =>{
    appendTip.innerHTML = "";
    appendTotal.innerHTML = "";
    perPerson.innerHTML = "";
    if(billValue.value == ""){
        alert(`Please enter the bill amount!`);
        billValue.focus();
        return;
    }
    if(tipValue.value == ""){
        alert(`Please enter the tip amount!`);
        tipValue.focus();
        return;
    }
    if(tipValue.value > 100){
        alert(`Tip value cannot exceed 100.`);
        tipValue.focus();
        return;
    }
    if(perPersonValue.value == 0 || ""){
        perPersonValue.value = 1;
    }
    const tipCalc = tipValue.value / 100;
    const tipTotal = (billValue.value * tipCalc) / perPersonValue.value;
    const billParse = parseFloat(billValue.value);
    const billTotal = billParse / perPersonValue.value;

    billTotalTip = billTotal + tipTotal;

    appendTip.innerHTML = `$${tipTotal.toFixed(2)}`;
    appendTotal.innerHTML = `$${billTotalTip.toFixed(2)}`;
    if(perPersonValue.value > 1){
        perPerson.innerHTML = "Per Person";
    }else{
        perPerson.innerHTML = "";
    }
});

//Clear button
btnClear.addEventListener("click", () =>{
    billValue.value = "";
    tipValue.value = "";
    perPersonValue.value = "";
    appendTip.innerHTML = "";
    appendTotal.innerHTML = "";
    perPerson.innerHTML = "";
    billValue.focus();
});
