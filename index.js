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
    if (val === "AC") {
      this.clear();
    } else {
      this.operator = val;
    }
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
  console.log(val);
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

//Create Calulator Buttons
function createButtons() {
  const buttons = [
    { title: "AC", type: "op", pos: "top" },
    { title: "/", type: "op", pos: "top" },
    { title: "%", type: "op", pos: "top" },
    { title: "/", type: "op", pos: "rig" },
    { title: "7", type: "num", pos: "mid" },
    { title: "8", type: "num", pos: "mid" },
    { title: "9", type: "num", pos: "mid" },
    { title: "x", type: "op", pos: "rig" },
    { title: "4", type: "num", pos: "mid" },
    { title: "5", type: "num", pos: "mid" },
    { title: "6", type: "num", pos: "mid" },
    { title: "-", type: "op", pos: "rig" },
    { title: "1", type: "num", pos: "mid" },
    { title: "2", type: "num", pos: "mid" },
    { title: "3", type: "num", pos: "mid" },
    { title: "+", type: "op", pos: "rig" },
  ];
  buttons.forEach((button) => {
    let btn = document.createElement("button");
    btn.innerHTML = button.title;
    btn.classList.add(
      button.pos === "mid"
        ? "numberButton"
        : button.pos === "top"
        ? "topButton"
        : "rightButton"
    );
    // btn.classList.add("numberButton");
    btn.addEventListener("click", function () {
      button.type === "num"
        ? handleNumberSelect(button.title)
        : handleOperatorSelect(button.title);
    });
    console.log(document);
    document.getElementById("topButtons").appendChild(btn);
  });
}
createButtons();
