document.getElementById('btn-withdraw').addEventListener('click', function(event){

const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value
const newWithdrawAmount = parseFloat (newWithdrawAmountString)

const totalWithdraw = document.getElementById('withdraw-total')
const previousWithdrawString = totalWithdraw.innerText;
const previousWithdraw = parseFloat (previousWithdrawString);

const totalAmount = newWithdrawAmount + previousWithdraw;
totalWithdraw.innerText = totalAmount;

const balance = document.getElementById('balance-total');
previousBalanceString = balance.innerText
const mainBalance = parseFloat (previousBalanceString)
const totalBalanceAmount = mainBalance - newWithdrawAmount;
balance.innerText = totalBalanceAmount;

withdrawField.value = '';
})