"use strict";
const mainContainer = document.getElementById("mainContainer");
const toggleBtnOne = document.getElementById("toggle-btn1");
const toggleBtnTwo = document.getElementById("toggle-btn2");
const toggleBtnThree = document.getElementById("toggle-btn3");

const toggleBalls = document.getElementById("toggle-balls");
const ball = document.getElementById("ball");

const input = document.getElementById("input");
const buttons = document.getElementById("buttons");
const settings = document.getElementById("settings");
const btn = Array.from(document.getElementsByClassName("btn"));

const del = document.getElementsByClassName("del")[0];
const reset = document.getElementsByClassName("reset")[0];
const equal = document.getElementsByClassName("equal")[0];

const btnNo = Array.from(document.getElementsByClassName("btn-no"));

const operations = Array.from(document.getElementsByClassName("operation"));

toggleBtnOne.addEventListener("click", () => {
  console.log("clicked...");
  toggleBalls.style.justifyContent = "flex-start";
  mainContainer.style.backgroundColor = "hsl(222, 26%, 31%)";
  toggleBalls.style.backgroundColor = "hsl(223, 31%, 20%)";
  ball.style.backgroundColor = "hsl(6, 63%, 50%)";
  input.style.backgroundColor = "hsl(224, 36%, 15%)";
  input.style.color = "hsl(0, 0%, 100%)";
  settings.style.color = "hsl(0, 0%, 100%)";
  buttons.style.backgroundColor = "hsl(223, 31%, 20%)";
  btn.forEach((element) => {
    element.style.backgroundColor = "hsl(30, 25%, 89%)";
    element.style.color = "hsl(60, 10%, 19%)";
    element.style.boxShadow = "0 3px 2px 0 hsl(28, 16%, 65%)";
  });
  del.style.backgroundColor = "hsl(225, 21%, 49%)";
  del.style.color = "white";
  del.style.boxShadow = "0 3px 2px 0 hsl(224, 28%, 35%)";

  reset.style.backgroundColor = "hsl(225, 21%, 49%)";
  reset.style.color = "white";
  reset.style.boxShadow = "0 3px 2px 0 hsl(224, 28%, 35%)";

  equal.style.backgroundColor = "hsl(6, 63%, 50%)";
  equal.style.color = "white";
  equal.style.boxShadow = "0 3px 0px 0 hsl(6, 70%, 34%)";
});

toggleBtnTwo.addEventListener("click", () => {
  console.log("clicked...");
  toggleBalls.style.justifyContent = "center";
  mainContainer.style.backgroundColor = "hsl(0, 0%, 90%)";
  toggleBalls.style.backgroundColor = "hsl(0, 5%, 81%)";
  ball.style.backgroundColor = "hsl(25, 98%, 40%)";
  input.style.backgroundColor = "hsl(0, 0%, 93%)";
  input.style.color = "hsl(60, 10%, 19%)";
  settings.style.color = "hsl(60, 10%, 19%)";
  buttons.style.backgroundColor = "hsl(0, 5%, 81%)";
  btn.forEach((element) => {
    element.style.backgroundColor = "hsl(45, 7%, 89%)";
    element.style.color = "hsl(60, 10%, 19%)";
    element.style.boxShadow = "0 3px 2px 0 hsl(35, 11%, 61%)";
  });

  del.style.backgroundColor = "hsl(185, 42%, 37%)";
  del.style.color = "white";
  del.style.boxShadow = "0 3px 2px 0 hsl(185, 58%, 25%)";

  reset.style.backgroundColor = "hsl(185, 42%, 37%)";
  reset.style.color = "white";
  reset.style.boxShadow = "0 3px 2px 0 hsl(185, 58%, 25%)";

  equal.style.backgroundColor = "hsl(25, 98%, 40%)";
  equal.style.color = "white";
  equal.style.boxShadow = "0 3px 0px 0 hsl(25, 99%, 27%)";
});

toggleBtnThree.addEventListener("click", () => {
  console.log("clicked...");
  toggleBalls.style.justifyContent = "flex-end";
  mainContainer.style.backgroundColor = "hsl(268, 75%, 9%)";
  toggleBalls.style.backgroundColor = "hsl(268, 71%, 12%)";
  ball.style.backgroundColor = "hsl(176, 100%, 44%)";
  input.style.backgroundColor = "hsl(268, 71%, 12%)";
  input.style.color = "hsl(52, 100%, 62%)";
  settings.style.color = "hsl(52, 100%, 62%)";
  buttons.style.backgroundColor = "hsl(268, 71%, 12%)";

  btn.forEach((element) => {
    element.style.backgroundColor = "hsl(268, 47%, 21%)";
    element.style.color = "hsl(52, 100%, 62%)";
    element.style.boxShadow = "0 3px 2px 0 hsl(290, 70%, 36%)";
  });

  del.style.backgroundColor = "hsl(281, 89%, 26%)";
  del.style.color = "white";
  del.style.boxShadow = "0 3px 2px 0 hsl(285, 91%, 52%)";

  reset.style.backgroundColor = "hsl(281, 89%, 26%)";
  reset.style.color = "white";
  reset.style.boxShadow = "0 3px 2px 0 hsl(285, 91%, 52%)";

  equal.style.backgroundColor = "hsl(176, 100%, 44%)";
  equal.style.color = "#000";
  equal.style.boxShadow = "0 3px 0px 0 hsl(177, 92%, 70%)";
});

//calculations

var calc = "";
var number1 = "";
var number2 = "";
var ans = false;
var dot = false;

reset.addEventListener("click", () => {
  input.value = "";
  dot = false;
  calc = "";
  number1 = "";
  number2 = "";
  ans = false;
});

btnNo.forEach((element) => {
  element.addEventListener("click", () => {
    if (!ans) {
      if (element.innerHTML == ".") {
        if (!dot) {
          if (input.value == 0) input.value = element.innerHTML;
          else {
            input.value += element.innerHTML;
          }
          dot = true;
        }
      } else {
        if (input.value == 0) input.value = element.innerHTML;
        else {
          input.value += element.innerHTML;
        }
      }
    }
  });
});

del.addEventListener("click", () => {
  if (ans) {
    input.value = "";
    dot = false;
    calc = "";
    number1 = "";
    number2 = "";
    ans = false;
  } else if (dot) {
    if (input.value == ".") {
      input.value = "";
      dot = false;
    } else if (input.value.charAt(input.value.length - 1) == ".") {
      input.value = input.value.slice(0, -1);
      dot = false;
    } else {
      input.value = input.value.slice(0, -1);
    }
  } else input.value = input.value.slice(0, -1);
});

operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    calc = operation.innerHTML;
    ans = false;
    number1 = input.value;
    input.value = "";
    if (dot) dot = !dot;
  });
});

const calcfn = (num1, num2, calc) => {
  if (calc === "+") {
    return Number(number1) + Number(number2);
  } else if (calc === "x") {
    return Number(number1) * Number(number2);
  } else if (calc === "-") {
    return Number(number1) - Number(number2);
  } else {
    return Number(number1) / Number(number2);
  }
};

equal.addEventListener("click", () => {
  ans = true;
  number2 = input.value;
  input.value = calcfn(number1, number2, calc);
});
