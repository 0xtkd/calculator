let span = document.createElement('span');

// delete and remove buttons
const deleteButton = document.querySelector('#delete')
const clearButton = document.querySelector('#clear')

// screen display
const displayResult = document.querySelector('#result')
const displayExpression = document.querySelector('#evaluate')

// operator
const operatorButton = document.querySelectorAll('.op')
// integers
const integersButton = document.querySelectorAll('.integer')

// precedent button
let precedentButton = '';
let opOn = false;

let displayValueExpression = '';

integersButton.forEach(integer => {
    integer.addEventListener('click', function (e) {
        if (displayExpression.textContent === '0') {
            displayExpression.textContent = '';     
        }

        if (e.target.value === '.' && precedentButton === e.target.value) {
            return;
        }
        displayExpression.textContent += e.target.value;
        precedentButton = e.target.value;  
        opOn = false; 

        // variable storing the display value for later evaluation
        displayValueExpression  = displayExpression.textContent;
        // console.log(displayValueExpression);

    });
});

operatorButton.forEach(op => {
    op.addEventListener('click', function (e) {
        if (precedentButton === e.target.value || opOn === true) return;

        displayExpression.textContent += e.target.value;
        precedentButton = e.target.value; 
        opOn = true;  
        // variable storing the display value for later evaluation
        displayValueExpression  = displayExpression.textContent;
        // console.log(displayValueExpression)

    });
});

clearButton.addEventListener('click', function () {
    displayExpression.textContent = '0';
    displayResult.textContent = '0';
    precedentButton = '';         
});

deleteButton.addEventListener('click', function (e) {
    if (displayExpression.textContent.length > 0) {
        displayExpression.textContent = displayExpression.textContent.slice(0, -1);
        precedentButton = '';   
        opOn = false;   
        
        // variable storing the display value for later evaluation
        displayValueExpression  = displayExpression.textContent;
        // console.log(displayValueExpression);  

        if  (displayExpression.textContent.length === 0) {
            displayExpression.textContent = '0';
        }
    } 
});


let opSize = 0;
opCounter = () => {
    for (let i in displayExpression.textContent) {
        if (isNaN(i) && i !== '.') {
            opSize++;
        }
        console.log(opSize)
    }
}; 
// create three variable to hold number one, nuber two, and the operator

let firstExpressionDigits = '';
let secondExpressionDigits = '';
let operatorExpression = '';

const evaluateInput = () => {
    const mathOperations = (operator, a, b) => {
        let calculator = 0;
        a = parseFloat(a);
        b = parseFloat(b);

        if (operator === 'x') {
            operator = '*';
        } else if (operator === '÷') {
            operator = '/';
        }

        switch (operator) {
            case '+':
                calculator = a + b;
                break;
            case '-':
                calculator = a - b;
                break;
    
            case '*':
                calculator = a * b;
                break;
            case '/':
                calculator = a / b;
                break;
            default:
                console.log('An error occured!')
                break;
        }
        return calculator;
    }    
    // expression evaluation logics

    let tempResult = 0;
    let inputValues = 0;

    const inputs = document.querySelectorAll('input[type=button]');
    inputs.forEach(input => {
        input.addEventListener('click', function(e) {
            if (isNaN(e.target.value) && input.className === 'op') {
                // console.log(input)
            }

// simple operation executor
            if (e.target.value === '=') {
                // console.log(operatorSignIsMoreThanOne, operatorExpression, firstExpressionDigits, secondExpressionDigits)
                // if(inputValues.includes('+')) {
                //     operatorExpression = '+'
                //     firstExpressionDigits = inputValues.split('+')[0];
                //     secondExpressionDigits = inputValues.split('+')[1];
                // } else if(inputValues.includes('-')) {
                //     operatorExpression = '-'
                //     firstExpressionDigits = inputValues.split('-')[0];
                //     secondExpressionDigits = inputValues.split('-')[1];
                // } else if(inputValues.includes('x')) {
                //     operatorExpression = 'x'
                //     firstExpressionDigits = inputValues.split('x')[0];
                //     secondExpressionDigits = inputValues.split('x')[1];
                // } else if (inputValues.includes('÷')) {
                //     operatorExpression = '÷'
                //     firstExpressionDigits = inputValues.split('÷')[0];
                //     secondExpressionDigits = inputValues.split('÷')[1];
                // }
                // displayResult.textContent = mathOperations(operatorExpression, firstExpressionDigits, secondExpressionDigits)
                displayResult.textContent = eval(displayExpression.textContent);
            }
// simple operation executor above

// very complex operation executor below here

            // inputValues = displayExpression.textContent;
            // if (opSize >= 2) {

                // inputValues = inputValues.slice(0, -1);
                // function separate (str) {
                //     if(inputValues.includes('+')) {
                //         operatorExpression = '+'
                //         firstExpressionDigits = inputValues.split('+')[0];
                //         secondExpressionDigits = inputValues.split('+')[1];
                //     } else if(inputValues.includes('-')) {
                //         operatorExpression = '-'
                //         firstExpressionDigits = inputValues.split('-')[0];
                //         secondExpressionDigits = inputValues.split('-')[1];
                //     } else if(inputValues.includes('x')) {
                //         operatorExpression = 'x'
                //         firstExpressionDigits = inputValues.split('x')[0];
                //         secondExpressionDigits = inputValues.split('x')[1];
                //     } else if (inputValues.includes('÷')) {
                //         operatorExpression = '÷'
                //         firstExpressionDigits = inputValues.split('÷')[0];
                //         secondExpressionDigits = inputValues.split('÷')[1];
                //     } 
                // }

                // separate(inputValues);
                // mathOperations(operatorExpression, firstExpressionDigits, secondExpressionDigits)
                // displayExpression.textContent = `${mathOperations(operatorExpression, firstExpressionDigits, secondExpressionDigits)}${inputValues.slice(-1)}`;
                // opCounter();
            // }  
// very complex operation executor above here
            
        })
    });
}

evaluateInput ();

