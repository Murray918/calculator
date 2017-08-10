let ids = ['seven', 'eight', 'nine', 'divide', 'four', 'five', 'six', 'multi', 'one', 'two', 'three', 'minus', 'zero', 'dot', 'plus']

let btns = [btn7 = {}, btn8 = {}, btn9 = {}, btnDivivde = {}, btn4 = {}, btn5 = {}, btn6 = {}, btnMulti = {}, btn1 = {}, btn2 = {}, btn3 = {}, btnMinus = {}, btn0 = {}, btnDot = {}, btnPlus = {}]

let btnC = {}
let delay = 0;
let btnEquals = {}
let bodyElement = document.querySelector(".calculatorWrapper");
let requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

btnC.get = document.getElementById('clear');
btnC.get.addEventListener('click', clearFn);
btnEquals.get = document.getElementById('equal');
btnEquals.get.addEventListener('click', equalFn);

for (var i = 0; i < ids.length; i++) {
  let value = ids[i];
  btns[i].get = document.getElementById(value);
  btns[i].event = btns[i].get.addEventListener("click", printFn);
}

let display = document.querySelector('#display');
display.textContent = ''

function printFn() {
  if (display.textContent === "IT'S LIT!") {
    display.textContent = ''
  }

  if (display.textContent.length <= 10) {
    display.textContent += event.path[0].textContent;
  };
}

function clearFn() {
  document.querySelector('#display').textContent = "IT'S LIT!";
}

function equalFn() {
  let equalMath = document.getElementById('display').textContent;
  document.querySelector('#display').textContent = eval(equalMath).toFixed(6);
  changeColor()
}

function reset(){
  delay = 0;
}

function changeColor() {
    delay++;

    if (delay > 5) {
        bodyElement.style.backgroundColor = getRandomColor();
        delay = 0;
    }
    requestAnimationFrame(changeColor);
    setTimeout(colorStop, 4000);
    setTimeout(reset, 4010)

}

function colorStop(){
  delay = ''
  hexColor = '#' + 0 + 'B' + 2 + 'B' + 48;
  bodyElement.style.backgroundColor = hexColor

}

function getRandomColor() {
    // creating a random number between 0 and 255
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    // going from decimal to hex
    let hexR = r.toString(16);
    let hexG = g.toString(16);
    let hexB = b.toString(16);
    // making sure single character values are prepended with a "0"
    if (hexR.length == 1) {
        hexR = "0" + hexR;
    }
    if (hexG.length == 1) {
        hexG = "0" + hexG;
    }
    if (hexB.length == 1) {
        hexB = "0" + hexB;
    }
    // creating the hex value by concatenatening the string values
    let hexColor = "#" + hexR + hexG + hexB;
    return hexColor.toUpperCase();
}
