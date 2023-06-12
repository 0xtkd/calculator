// delete and remove buttons
const deleteButton = document.querySelector('#delete');
const clearButton = document.querySelector('#clear');

// screen display
const displayResult = document.querySelector('#result');
const displayEvaluation = document.querySelector('#evaluate');

// operator
const operatorButton = document.querySelectorAll('.op');
// integers
const integersButton = document.querySelectorAll('.integer');

// precedent button
let precedentButton = '';
let opOn = false;

integersButton.forEach(integer => {
    integer.addEventListener('click', function () {
        if (displayEvaluation.textContent === '0') {
            displayEvaluation.textContent = '';     
        }

        if (integer.value === '.' && precedentButton === integer.value) {
            return;
        }
        displayEvaluation.textContent += integer.value;
        precedentButton = integer.value;  
        opOn = false; 

    });
});

operatorButton.forEach(op => {
    op.addEventListener('click', function () {
        if (precedentButton === op.value || opOn === true) {
            return;
        };
        displayEvaluation.textContent += op.value;
        precedentButton = op.value; 
        opOn = true;        
    });
});

clearButton.addEventListener('click', function () {
    displayEvaluation.textContent = '0';
    precedentButton = '';         

});

deleteButton.addEventListener('click', function () {
    if (displayEvaluation.textContent.length > 0) {
        displayEvaluation.textContent = displayEvaluation.textContent.slice(0, -1);
        precedentButton = '';   
        opOn = false;      
        if  (displayEvaluation.textContent.length === 0) {
            displayEvaluation.textContent = '0';
        }
    } 
});

