// step-1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(event){
// step-2 get the deposit amount from the deposit input field 
//for input field use .value to the value inside the input field
const depositField = document.getElementById('deposit-feild');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString)
depositField.value = ''
if(isNaN(newDepositAmount)){
    alert('plz provide a valid number')
    return;
}

// step-3 get the current deposit total;
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat (previousDepositTotalString);
//add number to set total deposit
const currentDepositTotal = previousDepositTotal + newDepositAmount;
depositTotalElement.innerText = currentDepositTotal

// step-5 get balance current total 
const balance = document.getElementById('balance-total');
previousBalanceString = balance.innerText
const mainBalance = parseFloat (previousBalanceString)
const totalBalance = mainBalance + currentDepositTotal;
balance.innerText = totalBalance;


depositField.value = ''
});

