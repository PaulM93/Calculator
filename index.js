class Calculator {
  constructor() {
    this.displayText = "";
    this.total = "";
    this.currentNumber = "";
    this.operator = "";
  }
  setDisplay(val) {
    this.displayText = this.displayText + val;
  }
  numberSelect(val) {
    this.operator === "" ? (this.total += val) : (this.currentNumber += val);
  }
  handleOperator(val) {
    this.equate();
    this.operator = val;
  }
  equate() {
    if (this.currentNumber !== "") {
      let cur = +this.currentNumber;
      let total = +this.total;
      switch (this.operator) {
        case "+":
          this.total = total + cur;
          break;
        case "-":
          this.total = total - cur;
          break;
        case "/":
          this.total = total / cur;
          break;
        case "x":
          this.total = total * cur;
      }
      this.currentNumber = "";
    }
  }
  clear() {
    this.displayText = "";
    this.total = "";
    this.currentNumber = "";
    this.operator = "";
  }
}
const calculator = new Calculator();

//Functionality
/*
    1) User inputs number
       - Set display text
       - Set current number
    2) User selects an operator
       - Set display text with operator
       - Set current number as total value
    3) User inputs another number 
       - If total !== 0 we compute based on the operator selected
       with the new number 

*/

function handleNumberSelect(val) {
  calculator.setDisplay(val);
  calculator.numberSelect(val);
  setDisplayText();
  //   console.log(calculator);
}

function handleOperatorSelect(val) {
  calculator.setDisplay(` ${val} `);
  calculator.handleOperator(val);
  setDisplayText();
  //   console.log(calculator);
}

function handleClear() {
  calculator.clear();
  setDisplayText();
}

function handleEquate() {
  calculator.equate();
  setDisplayText();
  //   console.log(calculator);
}

// //HTMl selectors
let displayHTML = document.getElementById("displayText");
let valueHTML = document.getElementById("value");
function setDisplayText(type) {
  displayHTML.innerHTML = calculator.displayText;
  valueHTML.innerHTML = calculator.total;
}

function createOperatorButtons() {
  const buttons = ["+", "-", "/", "x"];
  buttons.forEach((button) => {
    let btn = document.createElement("button");
    btn.innerHTML = button;
    btn.addEventListener("click", function () {
      handleOperatorSelect(button);
    });
    document.getElementById("operatorBtnDiv").appendChild(btn);
  });
}
createOperatorButtons();

//Create Calulator Buttons
function createButtons() {
  const buttons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  buttons.forEach((button) => {
    let btn = document.createElement("button");
    btn.innerHTML = button;
    btn.classList.add("numberButton");
    btn.addEventListener("click", function () {
      handleNumberSelect(button);
    });
    document.getElementById("numberBtnDiv").appendChild(btn);
  });
}
createButtons();
