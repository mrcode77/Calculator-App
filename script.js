const display1EL = document.querySelector(".display-1");
const display2EL = document.querySelector(".display-2");
const tempResultEL = document.querySelector(".temp-result");
const numbersEL = document.querySelectorAll(".number");
const operationEL = document.querySelectorAll(".operation");
const equalEL = document.querySelector(".equal");
const clearAllEL = document.querySelector(".all-clear");
const clearLastEL = document.querySelector(".last-entity-clear");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersEL.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2EL.innerText = dis2Num;
  });
});

operationEL.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) result;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});

function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1EL.innerText = dis1Num;
  display2EL.innerText = "";
  dis2Num = "";
  tempResultEL.innerText = result;
}

function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}

equalEL.addEventListener("click", (e) => {
  if (!dis1Num || !dis2Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2EL.innerText = result;
  tempResultEL.innerText = "";
  dis2Num = result;
  dis1Num = "";
});

clearAllEL.addEventListener("click", (e) => {
  dis1Num = "";
  dis2Num = "";
  display1EL.innerText = "";
  display2EL.innerText = "0";
  result = "";
  tempResultEL.innerText = "";
});

clearLastEL.addEventListener("click", (e) => {
  display2EL.innerText = "0";
  dis2Num = "";
});

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButtonEl(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");
  } else if (e.key === "Enter" || e.key === "=") {
    clickEqual();
  }
});
