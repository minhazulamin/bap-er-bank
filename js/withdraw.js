document.getElementById('btn-withdraw').addEventListener('click', function(event){

const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value
const newWithdrawAmount = parseFloat (newWithdrawAmountString)
withdrawField.value = '';
if(isNaN(newWithdrawAmount)){
    alert('plz provide a valid number')
    return;
}

const totalWithdraw = document.getElementById('withdraw-total')
const previousWithdrawString = totalWithdraw.innerText;
const previousWithdraw = parseFloat (previousWithdrawString);




const balance = document.getElementById('balance-total');
previousBalanceString = balance.innerText
const mainBalance = parseFloat (previousBalanceString)
if( newWithdrawAmount > mainBalance ){
    alert('baper bank a ato taka nai')
    return;
}
const totalAmount = newWithdrawAmount + previousWithdraw;
totalWithdraw.innerText = totalAmount;

const totalBalanceAmount = mainBalance - newWithdrawAmount;
balance.innerText = totalBalanceAmount;


})