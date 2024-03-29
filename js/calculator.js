//Set Global Variables
let globalVariables = {
    operatorState: false,
    operator: "+",
    number: 0,
    firstNumber: 0,
    dividedByZero: false
}
//Update Global before operate function
function updateGlobal(operator) {
    let previousNumberDisplay = document.getElementById("history");
    let currentNumberDisplay = document.getElementById("currentNum");
    let currentNumberGlobal = Number(currentNumberDisplay.textContent);

    if (!globalVariables.operatorState) {
        previousNumberDisplay.textContent += `${currentNumberGlobal} ${operator} `; 

    } else {
        previousNumberDisplay.textContent = previousNumberDisplay.textContent.slice(0, -2);
        previousNumberDisplay.textContent += `${operator} `;
    }
}
//clear calc
function AC() {
    let currentNumberDisplay = document.getElementById("currentNum");
    let previousNumberDisplay = document.getElementById("history");
    currentNumberDisplay.textContent = "0";
    previousNumberDisplay.textContent = "";
    globalVariables.number = 0;
    globalVariables.operator = "+";
    globalVariables.operatorState = false;
}

//operands
function operate() {
    if (!globalVariables.operatorState) {
        let currentDisplay = document.getElementById("currentNum");
        let currentNumberDisplay = Number(currentDisplay.textContent);
        let currentNumberGlobal = globalVariables.number;
        let operationResult = performOperation(globalVariables.operator, currentNumberGlobal, currentNumberDisplay);
        currentDisplay.textContent = operationResult;
        globalVariables.number = operationResult;
        globalVariables.operatorState = true;
    } 
}


//perform math (+,-,/,*)
function performOperation(operator,globalNum,userNum ){ 
    //alert("op:" + operator + " glbNum:"+globalNum + " userNum:"+ userNum)
    //let returnVal = 0;
    
    switch(operator){
        case "+":
            return globalNum + userNum;
        case "-":
            return globalNum - userNum;
        case "X":
            return globalNum * userNum;
        default:
            if(userNum === 0) {
                globalVariables.dividedByZero = true;
                return "Dividing By Zero is Not Allowed!";
            }
            return globalNum / userNum;
    }
}


//add digits to currentUser and Display
function digitClick(num) {
    let currentDisplay = document.getElementById("currentNum");
    if (currentDisplay.textContent == 0 || globalVariables.operatorState) { 
        currentDisplay.textContent = ""; 
        globalVariables.operatorState = false;
    }
    if(num === '.' && currentDisplay.textContent.includes('.')){
        alert('decimal already')
        return;
    }
    if(currentDisplay.textContent.length <=20){
    currentDisplay.textContent += num;
    }else{
        alert("This calculator is limited to 20 digits");
    }
}
//backSpace Click
function backSpace(){
    let currentDisplay = document.getElementById("currentNum");
    if (currentDisplay.textContent == 0 || globalVariables.operatorState || currentDisplay.textContent.length === 1) { 
        currentDisplay.textContent = ""; 
        globalVariables.operatorState = false;
    } else if (currentDisplay.textContent.length>1){
        //alert(currentDisplay.textContent.length)
        currentDisplay.textContent =  currentDisplay.textContent.substr(0, currentDisplay.textContent.length-1);
    }
}
//Keypress
function processKeyPress(key){
    switch (key){
        case '0':
            digitClick('0');
            break;
        case '1':
            digitClick('1');
            break;
        case '2':
            digitClick('2');
            break;
        case '3':
            digitClick('3');
            break;
        case '4':
            digitClick('4');
            break;
        case '5':
            digitClick('5');
            break;
        case '6':
            digitClick('6');
            break;
        case '7':
            digitClick('7');
            break;
        case '8':
            digitClick('8');
            break;
        case '9':
            digitClick('9');
            break;
        case 'backspace':
            backSpace();
            break;
        case 'delete':
            backSpace();
            break;
        case '+':
            updateGlobal('+');
            operate();
            globalVariables.operator = '+';
            break;
        case '-':
            updateGlobal('-');
            operate();
            globalVariables.operator = '-';
            break;
        case '*':
            updateGlobal('X');
            operate();
            globalVariables.operator = 'X';
            break;
        
        case '=':
            Equal();
            break;
        default:
            updateGlobal('/');
            operate();
            globalVariables.operator = '/';
            break;
    }
}
//Equals
function Equal(){
    let previousDisplay = document.getElementById("history");
    let currentDisplay = document.getElementById("currentNum");
    let currentNumberDisplay = Number(currentDisplay.textContent);
    let currentNumberGlobal = globalVariables.number;
    globalVariables.firstNumber = currentNumberDisplay;

    let operationResult = performOperation(globalVariables.operator, currentNumberGlobal, globalVariables.firstNumber);

    previousDisplay.textContent = "";
    currentDisplay.textContent = operationResult;
}

//Button Clicks
let digits = document.querySelectorAll('.digit');
digits.forEach(function(digit) {
  digit.addEventListener('click', function() {
      console.log(digit.innerHTML);
      if(globalVariables.dividedByZero === true) {
            globalVariables.dividedByZero = false;
          AC();
        
      }
      digitClick(digit.innerHTML);
  });
});
//all operation +-/*
let ops = document.querySelectorAll('.operation');
ops.forEach(function(op) {
  op.addEventListener('click', function() {
        updateGlobal(op.innerHTML);
        operate();
        globalVariables.operator = op.innerHTML;
  });
});
//Decimal 
let decBut = document.getElementById('Decimal');
decBut.addEventListener('click', function() {
      console.log(decBut.innerHTML);
  });
//equal 
let eqBut = document.getElementById('Equal');
eqBut.addEventListener('click', function() {
      console.log(eqBut.innerHTML);
        Equal();
  });
//clear 
let clrBut = document.getElementById('AC');
clrBut.addEventListener('click', function() {
      console.log(clrBut.innerHTML);
      AC();
//      //addBut(addBut.innerHTML);
  });
let bsBut = document.getElementById('BackSpace');
bsBut.addEventListener('click', function() {
      console.log(bsBut.innerHTML);
      backSpace();
//      //addBut(addBut.innerHTML);
  });

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    document.addEventListener('keydown', event => {
        const charList = '.*/-=+0123456789';
        const key = event.key.toLowerCase();

        // we are only interested in alphanumeric keys
        if (charList.indexOf(key) !== -1 || key === 'backspace' | key === 'delete'){
            processKeyPress(key);
            console.log(key);
         }else {
            return;
    }
    });
});
