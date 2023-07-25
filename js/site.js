function add() {
  //  get the first number

  let numberOne = document.getElementById("firstNumber").value;

  //  get the second number

  let numberTwo = document.getElementById("secondNumber").value;

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  //  add them

  let sum = numberOne + numberTwo;

  //  put the sum in the results div

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = sum;
}

function subtract() {
  let numberOne = document.getElementById("firstNumber").value;
  let numberTwo = document.getElementById("secondNumber").value;

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  let difference = numberOne - numberTwo;

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = difference;
}

function multiply() {
  let numberOne = document.getElementById("firstNumber").value;
  let numberTwo = document.getElementById("secondNumber").value;

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  let product = numberOne * numberTwo;

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = product;
}

function divide() {
  let numberOne = document.getElementById("firstNumber").value;
  let numberTwo = document.getElementById("secondNumber").value;

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  let quotient = numberOne / numberTwo;

  if (numberTwo == 0) {
    quotient = "Cannot divide by zero";
  }

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = quotient;
}

function sumAll() {
  let numberSeries = document.getElementById("numberSeries").value; // 12345
  let numberArray = numberSeries.split(""); // ["1", "2", "3", "4", "5"]

  let sum = 0;

  for (let i = 0; i < numberArray.length; i++) {
    let numberAsString = numberArray[i];
    let number = parseInt(numberAsString);
    sum = sum + number;
  }
  let resultsDiv = document.getElementById("results");
  resultsDiv.textContent = sum;
}

function multiplyAll() {
  // multiply all numbers in the series of numbers
  let numberSeries = document.getElementById("numberSeries").value;
  let numberArray = numberSeries.split("");

  let product = 1;

  for (let i = 0; i < numberArray.length; i++) {
    let numberAsString = numberArray[i];
    let number = parseInt(numberAsString);
    product = product * number;
  }
  let resultsDiv = document.getElementById("results");
  resultsDiv.textContent = product;
}

function minimum() {
  // find the smallest number in the series of numbers

  let numberSeries = document.getElementById("numberSeries").value;
  let numberArray = numberSeries.split("");

  let minimum = numberArray[0];

  for (let i = 0; i < numberArray.length; i++) {
    let numberAsString = numberArray[i];
    let number = parseInt(numberAsString);

    if (number < minimum) {
      minimum = number;
    }
  }
  let resultsDiv = document.getElementById("results");
  resultsDiv.textContent = minimum;
}

function maximum() {
  // find the largest number in the series of numbers

  let numberSeries = document.getElementById("numberSeries").value;
  let numberArray = numberSeries.split("");

  let max = numberArray[0];

  for (let i = 1; i < numberArray.length; i++) {
    let numberAsString = numberArray[i];
    let number = parseInt(numberAsString);

    if (number > max) {
      max = number;
    }
  }
  let resultsDiv = document.getElementById("results");
  resultsDiv.textContent = max;
}

function average() {
  // find the average in the series of numbers

  let numberSeries = document.getElementById("numberSeries").value;
  let numberArray = numberSeries.split("");

  let sum = 0;

  for (let i = 0; i < numberArray.length; i++) {
    let numberAsString = numberArray[i];
    let number = parseInt(numberAsString);

    sum += number;
  }

  let avg = sum / numberArray.length;

  let resultsDiv = document.getElementById("results");
  resultsDiv.textContent = avg;
}
