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
//operands
function operate() {
    if (!globalVariables.operatorState) {
        let currentDisplay = document.getElementById("currentNum");
        let currentNumberDisplay = Number(currentDisplay.textContent);
        let currentNumberGlobal = globalVars.number;
        let operationResult = performOperation(globalVars.operator, currentNumberGlobal, currentNumberDisplay);
        currentDisplay.textContent = operationResult;
        globalVariables.number = operationResult;
        globalVariables.operatorState = true;
    } 
}
function performOperation(operator,globalNum,userNum ){
    
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
      console.log(op.innerHTML);
      //digitClick(digit.innerHTML);
  });
});
//Add 
//let addBut = document.getElementById('Add');
//addBut.addEventListener('click', function() {
//      console.log(addBut.innerHTML);
//      //addBut(addBut.innerHTML);
//  });