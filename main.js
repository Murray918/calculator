let ids = ['seven', 'eight', 'nine', 'divide', 'four', 'five', 'six', 'multi', 'one', 'two', 'three', 'minus', 'zero', 'dot', 'plus']

let btns = [btn7 = {}, btn8 = {}, btn9 = {}, btnDivivde = {}, btn4 = {}, btn5 = {}, btn6 = {}, btnMulti = {}, btn1 = {}, btn2 = {}, btn3 = {}, btnMinus = {}, btn0 = {}, btnDot = {}, btnPlus = {}]

let btnC = {}
let btnEquals = {}

btnC.get = document.getElementById('clear');
btnC.event = btnC.get.addEventListener('click', clearFn);
btnEquals.get = document.getElementById('equal');
btnEquals.event = btnEquals.get.addEventListener('click', equalFn);

for (var i = 0; i < ids.length; i++) {
  let value = ids[i];
  btns[i].get = document.getElementById(value);
  btns[i].event = btns[i].get.addEventListener("click", printFn);
}

function printFn() {
  document.querySelector('#display').textContent += event.path[0].textContent;
}

function clearFn() {
  document.querySelector('#display').textContent = "";
}

function equalFn() {
  let equalMath = document.getElementById('display').textContent;
  document.querySelector('#display').textContent = eval(equalMath);
}
