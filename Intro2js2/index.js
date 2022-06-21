var opr;
var num1, num2, result;

function bac() {
    opr = prompt("Basic Arithmetic Calculator \n\n Operations: \n Q. Quit \n 1. Add \n 2. Subtract \n 3. Multiply \n 4. Divide \n\n Pick a number: ");

    if (opr == 'Q' || opr == 'q') {
        opr = opr.toLowerCase();
        alert("Quiting...");
    } else if (opr == 1) {
        num1 = Number(prompt("Enter first number: "));
        num2 = Number(prompt("Enter second number: "));
        result = num1 + num2;
        alert(`Your calculation: \n\n ${num1} + ${num2} = ${result}`);
    } else if (opr == 2) {
        num1 = Number(prompt("Enter first number: "));
        num2 = Number(prompt("Enter second number: "));
        result = num1 - num2;
        alert(`Your calculation: \n\n ${num1} - ${num2} = ${result}`);
    } else if (opr == 3) {
        num1 = Number(prompt("Enter first number: "));
        num2 = Number(prompt("Enter second number: "));
        result = num1 * num2;
        alert(`Your calculation: \n\n ${num1} * ${num2} = ${result}`);
    } else if (opr == 4) {
        num1 = Number(prompt("Enter first number: "));
        num2 = Number(prompt("Enter second number: "));
        result = num1 / num2;
        alert(`Your calculation: \n\n ${num1} / ${num2} = ${result}`);
    } else {
        alert("Invalid input!");
    }
}

while (opr != 'q') {
    bac();
}