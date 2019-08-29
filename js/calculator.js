//Set Global Variables
let globalVariables = {
    operatorState: false,
    operator: "+",
    number: 0,
    firstNumber: 0
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
    if(currentDisplay.textContent.length <=9){
    currentDisplay.textContent += num;
    }else{
        alert("This calculator is limited to 9 digits");
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

//Button Clicks
let digits = document.querySelectorAll('.digit');
digits.forEach(function(digit) {
  digit.addEventListener('click', function() {
      console.log(digit.innerHTML);
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
