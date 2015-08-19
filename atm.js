$(document).ready(function(){

var balanceCurrent = 0;
var balanceSavings = 0;

$(function() {
  $('#depositCurrent').on('click', depositCurrent);
  $('#withdrawCurrent').on('click', withdrawCurrent);
  $('#depositSavings').on('click', depositSavings);
  $('#withdrawSavings').on('click', withdrawSavings);
});

function depositCurrent() {
  var inputValue = $('#amountCurrent').val();
  inputValue = parseInt(inputValue);
  balanceCurrent = inputValue + balanceCurrent;
  $('#balanceCurrent').html('GBP £' + balanceCurrent);
}

function depositSavings() {
  var inputValue = $('#amountSavings').val();
  inputValue = parseInt(inputValue);
  balanceSavings = inputValue + balanceSavings;
  $('#balanceSavings').html('GBP £' + balanceSavings);
}

function withdrawCurrent() {
  var inputValue = $('#amountCurrent').val();
  inputValue = parseInt(inputValue);
  comboBalance = accountWithdrawl(inputValue, balanceCurrent, balanceSavings);
  balanceCurrent = comboBalance[0];
  balanceSavings = comboBalance[1];
  $('#balanceCurrent').html('GBP £' + balanceCurrent);
  $('#balanceSavings').html('GBP £' + balanceSavings);
}

function withdrawSavings() {
  var inputValue = $('#amountSavings').val();
  var inputValue = parseInt(inputValue);
  newBalance = savingsWithdrawlCalc(inputValue, balanceSavings);
  balanceSavings = newBalance[0];
  $('#balanceSavings').html('GBP £' + balanceSavings);
  $('#balanceSavings')
}

function savingsWithdrawlCalc(inputValue, savings) {
  if(inputValue<=savings) {
    savings= savings-inputValue;
    } else if (inputValue>savings) {
      savings=savings;
    }
    return [savings];
  }

function currentWithdrawlCalc(inputValue, current, savings) {
  if (inputValue<=current) {
    current= current-inputValue; //note to self: do i need absolute value here?? negative values will end up depositing in a withdrawl otherwise...
    } else if ((inputValue>current) && (inputValue<=(savings+current))) {
      savings = (current+savings)-inputValue;
      current = 0;
    }
    return [current, savings];
  }

})


/*
Checklist...
  1. Two bank accounts that each hold a numerical value - Y
  2. User inputs a number and that number updates the respective account balance - Y
  3. User inputs a number and that number is subracted from the respective account balance - Y
  4. No negative balances are allowed - Y
  5. Balance available for current withdrawl is actually C + S accounts - Y
  6. Balance available for savings withdrawl is only S account - Y
  7. User should not be able to deposit a neg value - Not finished
  8. Change to red - Not finished
*/



