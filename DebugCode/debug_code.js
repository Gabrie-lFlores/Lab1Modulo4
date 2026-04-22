	
	let indice=-1;
    function performOperation() {
	// Get user input from input fields
   
	let num1 = parseInt(document.getElementById('input1').value);
	let num2 = parseInt(document.getElementById('input2').value);
	// Check if inputs are valid numbers
	if (!isNaN(num1) && !isNaN(num2)) {
	// Perform the operation
				let suma= add(num1, num2);
                displayResult(num1, num2, suma);// Display the result
            	let result = multiply(num1, num2);
				displayResult(num1, num2, result);// Display the result
                let division = divide(num1, num2);
                displayResult(num1, num2,  division);// Display the result
				} else {
					displayResult('Please enter valid numbers');
				}
			}
            function add(a, b) {
                // Introduce a debugger statement to pause execution
                debugger
                return a + b;
                }

			function multiply(a, b) {
				// Introduce a debugger statement to pause execution
				debugger;

				// Multiply the numbers
				return a * b;
			}
            function divide(a, b) {
                // Introduce a debugger statement to pause execution
            
                if (b !== 0) {      
                    return a / b;
                }
                else{
                    return 'Error: Division by zero is not allowed';        
                }   
            }

			function displayResult(num1, num2, result) {
				// Display the result in the paragraph element
                 const operation=["+","*","/"];
                indice++;
				const resultElement = document.getElementById('result');
				resultElement.innerHTML+= `<br> The result of ${num1} ${operation[indice]}  ${num2} = ${result}`;
			}
		
