'use strict';

// Declare current number and current expression variables
let currentNumber = '';
let currentExpression = '';
let evaluatedExpression = '';
let result = '';

// Get button elements nodelist
let buttons = document.querySelectorAll('.btn');

// Create an array of operation buttons
let operationsButtons = Array.from(document.querySelectorAll('.btn-operation'));

// Declare function to get individual elements
let getElement = function (id) {
  return document.querySelector(id);
};

// Initialize button press booleans

let equalPress = false;
let operationPress = false;
let numberPress = false;
let percentPress = false;
let piPress = false;
let squaredPress = false;
let clearPress = false;

// Display functions
const changeDisplay = function (el, text) {
  el.textContent = '';
  el.textContent = text;
};

const updateDisplay = function (el, text) {
  el.textContent += text;
};

const resetAllDisplay = function () {
  getElement('.number-display').textContent = '';
  getElement('.expression-display').textContent = '';
};

const resetNumberDisplay = function () {
  getElement('.number-display').textContent = '';
};

const displayError = function () {
  changeDisplay(getElement('.number-display'), 'ERROR');
  changeDisplay(getElement('.expression-display'), '');
};

// Expression functions
const updateExpression = function (text) {
  currentExpression = currentExpression + ' ' + text;
};

const resetExpression = function () {
  currentExpression = '';
  currentNumber = '';
};

const evaluateExpression = function (expression) {
  // Replace operation characters in expression to be evaluated
  evaluatedExpression = expression
    .replaceAll('X ', '*')
    .replaceAll('÷', '/')
    .replaceAll('^', '**')
    .replaceAll('π', 'Math.PI');
  return Math.round(eval(evaluatedExpression) * 10000) / 10000;
};

// Function to update booleans after each button press
const updateBools = function (buttonType) {
  equalPress = false;
  operationPress = false;
  numberPress = false;
  percentPress = false;
  piPress = false;
  squaredPress = false;
  clearPress = false;
  switch (buttonType) {
    case 'equal':
      equalPress = true;
      break;
    case 'operation':
      operationPress = true;
      break;
    case 'number':
      numberPress = true;
      break;
    case 'percent':
      percentPress = true;
      break;
    case 'pi':
      piPress = true;
      break;
    case 'squared':
      squaredPress = true;
      break;
    case 'clear':
      clearPress = true;
      break;
  }
};

// Add event listeners for buttons
for (let i = 0; i < buttons.length; i++) {
  // Set text variable to text content of button
  let text = buttons[i].textContent;

  // Button presses
  buttons[i].addEventListener('click', function () {
    // Clear button
    try {
      if (buttons[i] === getElement('#btn-clear')) {
        resetAllDisplay();
        resetExpression();
        updateBools('clear');

        // Delete button
      } else if (buttons[i] === getElement('#btn-delete')) {
        currentNumber = currentNumber.slice(0, -1);
        resetNumberDisplay();
        updateDisplay(getElement('.number-display'), currentNumber);
        updateBools('clear');

        // Equals button
      } else if (buttons[i] === getElement('#btn-equals')) {
        updateExpression(currentNumber);

        // Evaluate expression and store result
        result = evaluateExpression(currentExpression);

        // Make sure result is a number
        if (
          typeof result === 'number' &&
          result != 'Infinity' &&
          !isNaN(result)
        ) {
          // Change display to the result
          changeDisplay(getElement('.number-display'), result);
          // Add equals sign to the expression to be displayed
          updateExpression(text);
          // Display expression with equals sign
          changeDisplay(getElement('.expression-display'), currentExpression);
          // Update expression to result
          currentExpression = result;
          // Reset current number
          currentNumber = '';
        } else {
          displayError();
          resetExpression();
        }

        updateBools('equal');

        // Pi button
      } else if (buttons[i] === getElement('#btn-pi')) {
        if (numberPress) {
          changeDisplay(getElement('.number-display'), currentNumber + 'π');
          updateExpression(currentNumber + ' X π');
          changeDisplay(getElement('.expression-display'), currentExpression);
          currentNumber = '';
        } else if (equalPress) {
          resetExpression();
          resetAllDisplay();
          currentNumber = text;
          changeDisplay(getElement('.number-display'), text);
        } else {
          currentNumber = text;
          changeDisplay(getElement('.number-display'), text);
        }
        updateBools('pi');

        // Squared button
      } else if (buttons[i] === getElement('#btn-squared')) {
        updateExpression(currentNumber);
        updateExpression('^ 2');
        result = evaluateExpression(currentExpression);
        changeDisplay(getElement('.expression-display'), currentExpression);
        changeDisplay(getElement('.number-display'), result);
        currentNumber = '';
        updateBools('operation');

        // Percent button
      } else if (buttons[i] === getElement('#btn-percent')) {
        // If there is a current number, calculate it as a percentage
        if (currentNumber) {
          currentNumber = String(currentNumber.replaceAll('π', 'Math.PI'));
          currentNumber = String(
            Math.round((eval(currentNumber) / 100) * 10000) / 10000
          );
          changeDisplay(getElement('.number-display'), currentNumber);
          // If there is NO current number, calculate current stored expression value as a percentage
        } else {
          currentExpression =
            Math.round((currentExpression / 100) * 10000) / 10000;
          if (currentExpression) {
            changeDisplay(getElement('.number-display'), currentExpression);
          } else {
            displayError();
            resetExpression();
          }
        }
        updateBools('percent');
        // Operation buttons
      } else if (operationsButtons.includes(buttons[i])) {
        updateExpression(currentNumber);
        updateExpression(text);
        changeDisplay(getElement('.expression-display'), currentExpression);
        currentNumber = '';
        updateBools('operation');
        // Number and decimal buttons
      } else {
        if (equalPress) {
          resetExpression();
          resetAllDisplay();
          currentNumber = text;
          changeDisplay(getElement('.number-display'), text);
        } else if (percentPress) {
          resetExpression();
          currentNumber = text;
          changeDisplay(getElement('.number-display'), text);
        } else if (operationPress) {
          currentNumber = text;
          changeDisplay(getElement('.number-display'), text);
        } else {
          currentNumber += text;
          updateDisplay(getElement('.number-display'), text);
        }
        updateBools('number');
      }
    } catch (err) {
      resetExpression();
      displayError();
      console.log(currentExpression);
    }
    // Temporarily update expression above calcualtor
    getElement('.test-expression').textContent = currentExpression;
    getElement('.test-current-number').textContent = currentNumber;
    getElement('.test-operation').textContent = operationPress;
    getElement('.test-equal').textContent = equalPress;
    getElement('.test-eval').textContent = evaluatedExpression;
    getElement('.test-result').textContent = result;
    getElement('.test-number').textContent = numberPress;
    getElement('.test-percent').textContent = percentPress;
  });
}
