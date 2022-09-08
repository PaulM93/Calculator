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
    if (this.operator === "") {
      this.setDisplay(` ${val} `);
    }
    this.operator = val;
  }
  roundValue(val) {
    return String(val % 1 != 0 ? val.toFixed(2) : val);
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
      this.operator = "";
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

function handleNumberSelect(val) {
  calculator.setDisplay(val);
  calculator.numberSelect(val);
  setDisplayText();
}

function handleOperatorSelect(val) {
  console.log(calculator);
  console.log(val === calculator.operator);
  if (calculator.total !== "") {
    switch (val) {
      case "+/-":
        calculator.invertNumber();
        break;
      case "%":
        calculator.percentageNumber();
        break;
      case "AC":
        handleClear();
        break;
      default:
        calculator.handleOperator(val);
      // calculator.setDisplay(` ${val} `);
    }

    setDisplayText();
    console.log(calculator);
  }
}

function handleEquate() {
  calculator.equate();
  setDisplayText();
}

// //HTMl selectors
let displayHTML = document.getElementById("displayText");
let valueHTML = document.getElementById("value");
function setDisplayText() {
  console.log(calculator);
  if (calculator.total === "") {
    valueHTML.innerHTML = 0;
  } else {
    valueHTML.innerHTML = calculator.total;
  }
  displayHTML.innerHTML = calculator.displayText;
  console.log(calculator.total.length);
  const numberLength = calculator.total.length;
  if (numberLength <= 5) {
    displayHTML.style.fontSize = "16px";
    valueHTML.style.fontSize = "80px";
  } else if (numberLength >= 5 && numberLength < 7) {
    valueHTML.style.fontSize = "60px";
  } else if (numberLength >= 7 && numberLength < 15) {
    valueHTML.style.fontSize = "40px";
  } else if (numberLength >= 15) {
    displayHTML.style.fontSize = "10px";
    valueHTML.style.fontSize = "30px";
  }
}

function handleClear() {
  calculator.clear();
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
    btn.addEventListener("click", function () {
      button.type === "num"
        ? handleNumberSelect(button.title)
        : handleOperatorSelect(button.title);
    });
    document.getElementById("topButtons").appendChild(btn);
  });
}
createButtons();
