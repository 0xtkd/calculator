// delete and remove buttons
const deleteButton = document.querySelector('#delete')
const clearButton = document.querySelector('#clear')

// screen display
const displayResult = document.querySelector('#result')
const displayEvaluation = document.querySelector('#evaluate')

// operator
const operatorButton = document.querySelectorAll('.op')
// integers
const integersButton = document.querySelectorAll('.integer')

// precedent button
let precedentButton = '';
let opOn = false;

let displayValueExpression = '';

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

        // variable storing the display value for later evaluation
        displayValueExpression  = displayEvaluation.textContent;
        // console.log(displayValueExpression);

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
        
        // variable storing the display value for later evaluation
        displayValueExpression  = displayEvaluation.textContent;
        // console.log(displayValueExpression)

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
        
        // variable storing the display value for later evaluation
        displayValueExpression  = displayEvaluation.textContent;
        // console.log(displayValueExpression);  

        if  (displayEvaluation.textContent.length === 0) {
            displayEvaluation.textContent = '0';
        }
    } 
});

// create three variable to hold number one, nuber two, and the operator

let firstExpressionDigits = '';
let secondExpressionDigits = '';
let operatorExpression = '';

const evaluateInput = () => {
    const operationType = (operation, a, b) => {
        switch (operation) {
            case 'add':
                    const add = (a, b) => {
                        return a + b;
                    }
                    return add(a, b);
                break;
            case 'substract':
                    const substract = (a, b) => {
                        return a + b;
                    }
                    return substract(a, b);
                break;
    
            case 'multiply':
                    const multiply = (a, b) => {
                        return a + b;
                    }
                    return multiply(a, b);
                break;
            case 'divide':
                    const divide = (a, b) => {
                        return a + b;
                    }
                    return divide(a, b);
                break;
            default:
                console.log('An error occured!')
                break;
        }
    }    
    // expression evaluation logics
    let twoOperatorSigns = false;

    const inputs = document.querySelectorAll('input[type=button]');
    inputs.forEach(input => {
        input.addEventListener('click', function() {
            if (input.value === '=' || twoOperatorSigns === true) {
                // do evaluation
                // console.log(input.value)
                // console.log(displayEvaluation.textContent);

                // temp solution
                displayResult.textContent = eval(displayEvaluation.textContent);
                return;
                // temp solution

                for (let n in displayEvaluation.textContent) {
                    if (Number(n)) {
                        console.log('NaN bro!')
                        let tempNumbers = displayEvaluation.textContent.slice(indexOf(n), -1);
                        // return
                        // enter in another loop to get the second number
                            // for (let s in ) {}
                        console.log(tempNumbers)
                    } else {
                        firstExpressionDigits += n;
                        console.log(`number one ${firstExpressionDigits}`)
                    }
                    // console.log(firstExpressionDigits)
                }
            } 
        })
    });
}

evaluateInput ();