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
  roundValue(val) {
    console.log(val);
    return Math.round((val * 100) / 100);
  }
  invertNumber() {
    this.total *= -1;
    this.displayText = this.total;
  }
  percentageNumber() {
    this.total = this.total / 100;
    this.displayText = this.total;
  }
  equate() {
    if (this.currentNumber !== "") {
      console.log("op", this.operator);
      let calculatedVal;
      let cur = +this.currentNumber;
      let total = +this.total;
      switch (this.operator) {
        case "+":
          calculatedVal = total + cur;
          this.total = this.roundValue(calculatedVal);
          break;
        case "−":
          calculatedVal = total - cur;
          this.total = this.roundValue(calculatedVal);
          break;
        case "÷":
          calculatedVal = total / cur;
          this.total = this.roundValue(calculatedVal);
          break;
        case "x":
          calculatedVal = total * cur;
          this.total = this.roundValue(calculatedVal);
          break;
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
  switch (val) {
    case "+/-":
      calculator.invertNumber();
      break;
    case "%":
      calculator.percentageNumber();
      break;
    default:
      calculator.setDisplay(` ${val} `);
  }

  calculator.handleOperator(val);
  setDisplayText();
  console.log(calculator);
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

function createTime() {
  const date = new Date().toLocaleTimeString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  const timeDisplay = document.getElementById("time");
  timeDisplay.textContent = date;
}
createTime();
setInterval(createTime, 1000);

//Create Calulator Buttons
function createButtons() {
  const buttons = [
    { title: "AC", type: "op", pos: "top" },
    { title: "+/-", type: "op", pos: "top" },
    { title: "%", type: "op", pos: "top" },
    { title: "÷", type: "op", pos: "rig" },
    { title: "7", type: "num", pos: "mid" },
    { title: "8", type: "num", pos: "mid" },
    { title: "9", type: "num", pos: "mid" },
    { title: "x", type: "op", pos: "rig" },
    { title: "4", type: "num", pos: "mid" },
    { title: "5", type: "num", pos: "mid" },
    { title: "6", type: "num", pos: "mid" },
    { title: "−", type: "op", pos: "rig" },
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
    document.getElementById("topButtons").appendChild(btn);
  });
}
createButtons();
