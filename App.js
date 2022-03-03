//! DOM Elements..

let h2 = document.getElementById("h2");
let h1 = document.getElementById("h1");
let calculator = document.querySelector(".calculator");
let number = document.querySelectorAll(".number");

//!AddEventListener..

calculator.addEventListener("click", (e) => {
  if (e.target.classList.contains("zero")) {
    if (
      h1.innerText == "0" ||
      h1.innerText == "-0" ||
      h1.innerText.length > 10
    ) {
      return;
    } else {
      h1.innerText += e.target.innerText;
    }
  } else if (e.target.classList.contains("point")) {
    if (
      !(h1.innerText == "") &&
      !(h1.innerText == "-") &&
      !h1.innerText.includes(".") &&
      !(h1.innerText.length > 9)
    ) {
      h1.innerText += e.target.innerText;
    }
  } else if (e.target.classList.contains("number")) {
    if (h1.innerText == "0") {
      h1.innerText = e.target.innerText;
    } else {
      if (!(h1.innerText.length > 9)) {
        h1.innerText += e.target.innerText;
      } 
    }
  } else if (e.target.classList.contains("plus-minus")) {
    if (h1.innerText == "") {
      h1.innerText = "-";
    } else if (h1.innerText == "-") {
      h1.innerText = "";
    } else {
      h1.innerText = -1 * +h1.innerText;
    }
  } else if (e.target.classList.contains("operator")) {
    if (h1.innerText == "" && h2.innerText !== "") {
      h2.innerText = h2.innerText.slice(0, -1) + e.target.innerText;
    } else if (h1.innerText !== "" && h2.innerText == "") {
      h2.innerText = h1.innerText + " " + e.target.innerText;
      h1.innerText = "";
    } else if (h1.innerText !== "" && h2.innerText !== "") {
      operand();
      h2.innerText = h1.innerText + " " + e.target.innerText;
      h1.innerText = "";
    }
  } else if (e.target.classList.contains("equal")) {
    if (h1.innerText == "") {
      return;
    } else {
      operand();
      h2.innerText = "";
    }
  } else if (e.target.classList.contains("clear")) {
    h1.innerText = "";
    h2.innerText = "";
  }
});

//! Functions..

function operand() {
  let num1 = +h2.innerText.slice(0, -2);
  let num2 = +h1.innerText;
  let opr = h2.innerText[h2.innerText.length - 1];

  switch (opr) {
    case "+":
      h1.innerText = num1 + num2;
      break;
    case "-":
      h1.innerText = num1 - num2;
      break;
    case "x":
      h1.innerText = num1 * num2;
      break;
    case "/":
      h1.innerText = (num1 / num2).toFixed(5);
      toFixClear();
      break;
    case "%":
      h1.innerText = ((num1 * num2) / 100).toFixed(5);
      console.log(h1.innerText);
      toFixClear();
      break;
  }

  if(h1.innerText > 10){
    h1.innerText = h1.innerText.slice(0,10);
  }
}

function toFixClear() {
  if (h1.innerText.slice(-6) == ".00000") {
    h1.innerText = h1.innerText.replace(h1.innerText.slice(-6), "");
  } else if (h1.innerText.slice(-4) == "0000") {
    h1.innerText = h1.innerText.replace(h1.innerText.slice(-4), "");
  } else if (h1.innerText.slice(-3) == "000") {
    h1.innerText = h1.innerText.replace(h1.innerText.slice(-3), "");
  } else if (h1.innerText.slice(-2) == "00") {
    h1.innerText = h1.innerText.replace(h1.innerText.slice(-2), "");
  } else if (h1.innerText.slice(-1) == "0") {
    h1.innerText = h1.innerText.replace(h1.innerText.slice(-1), "");
  }
}

//! HOUR Settings..
let hour = document.getElementById("hour");
let hour_function = () => {
  hour.innerHTML =
    new Date().getHours().toString().padStart(2, "0") +
    ":" +
    new Date().getMinutes().toString().padStart(2, "0");
};
setInterval(hour_function, 500);


console.log(9999999999999*99999999999);