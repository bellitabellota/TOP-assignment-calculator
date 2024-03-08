let numberString1 = '';
let numberString2 = '';

let operator = '';

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


function operate(numberString1, numberString2, operator) {
  let number1 = Number(numberString1);
  let number2 = Number(numberString2);
  if(operator === ' + ') {
    return add(number1, number2);
  } else if (operator === ' - ') {
    return subtract(number1, number2);
  } else if( operator === ' * ') {
    return multiply(number1, number2);
  } else if (operator === ' / ') {
    if(number2 === 0) {
      return document.querySelector('.js-input').innerHTML = '/ by 0 not possible';
      
    }
    if(Number.isInteger(divide(number1, number2))) {
      return divide(number1, number2);
    } else { return Math.round(divide(number1, number2) *10)/10}
  }
}

let input = '';


document.querySelectorAll('.js-operator').forEach((clickedOperator) => {
  clickedOperator.addEventListener('click', () => {

    if(input.includes(' + ') || input.includes(' - ') || input.includes(' * ') || input.includes(' / ')) {
      numberString1 = operate(numberString1, numberString2, operator);
      operator = clickedOperator.innerHTML;

      input = numberString1 + operator;
      numberString2 = '';
      document.querySelector('.js-input').innerHTML = numberString1;
      return
    }

    operator = clickedOperator.innerHTML;
    

    input += operator;
  })
})

document.querySelectorAll('.js-digit').forEach((digit) => {
  digit.addEventListener('click', () => {

    input += digit.innerHTML;
    

    if (input.includes(' + ') || input.includes(' - ') || input.includes(' * ') || input.includes(' / ')) {
      numberString2 += digit.innerHTML;
      document.querySelector('.js-input').innerHTML = numberString2;
    } else {
      numberString1 += digit.innerHTML;
      document.querySelector('.js-input').innerHTML = numberString1;
    }
  })
});

let result = '';

document.querySelector('.js-equals').addEventListener('click', () => {
  if(!numberString2) {
    document.querySelector('.js-input').innerHTML = numberString1;
    return
  }
  result = operate(numberString1, numberString2, operator);
  document.querySelector('.js-input').innerHTML = result;
})

document.querySelector('.js-clear').addEventListener('click', () => {
  numberString1 = '';
  numberString2 = '';
  operator = '';
  result = '';

  input = '';
  document.querySelector('.js-input').innerHTML = input;
})