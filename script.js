$(document).ready(function() {
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = '0';
    updateScreen(result);
    
    $('.btn').on('click', function(evt) {
      var buttonPressed = $(this).html();
      console.log(buttonPressed);
      
      if (buttonPressed === "AC") {
            result = 0;
            currentEntry = '0';
            prevEntry = '';
            $(".store").html(prevEntry);
      } else if (buttonPressed === "CE") {
            currentEntry = currentEntry.substring(0, currentEntry.length-1);
      } else if (buttonPressed === '.') {
            currentEntry += '.';
      } else if (isNumber(buttonPressed)) {
            if (currentEntry === '0') currentEntry = buttonPressed;
            else currentEntry = currentEntry + buttonPressed;   // string
      } else if (isOperator(buttonPressed)) {
            prevEntry = parseFloat(currentEntry);
            operation = buttonPressed;
            $(".store").html(prevEntry + operation);
            currentEntry = '';
      } else if(buttonPressed === '%') {
            currentEntry = currentEntry / 100;
      } else if (buttonPressed === '=') {
            currentEntry = operate(prevEntry, currentEntry, operation);
            operation = null;
      }
      updateScreen(currentEntry);
    });
  });
  
  updateScreen = function(displayValue) {
    var displayValue = displayValue.toString();
    $('.screen').html(displayValue.substring(0, 10));   // displaying 10 characters
  };
  
  isNumber = function(value) {
    return !isNaN(value);
  }
  
  isOperator = function(value) {
    return value === '/' || value === 'X' || value === '+' || value === '-';
  };
  
  operate = function(a, b, operation) {
    if(a === null || b === null || operation === null) return '0';
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation);
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === 'X') return a * b;
    if (operation === '/') return a / b;
  }