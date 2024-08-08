let availableBalance =10000;
let cardPin=      prompt('8083');
let bankName = prompt('United Bank of Africa');
let amount = prompt('4000')
if(amount>availableBalance){
  alert('Insufficient funds');
  let amount = prompt('Withdrawal Amount');
}else{
  availableBalance= availableBalance-amount;
  alert('Withrawal Successful');
}
console.log(cardPin)