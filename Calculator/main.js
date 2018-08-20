function addInExpression(literal) {
    var inputTextBox = document.getElementById("expression");
    inputTextBox.value = inputTextBox.value + literal.value;
}

function clearInput() {
    document.getElementById("expression").value = "";
    document.getElementById("result").innerHTML = "Result Will Be shown Here!";
}

function calculate() {
    var inputTextBox = document.getElementById("expression");
    var outputBox = document.getElementById("result");
    try {
        result = eval(inputTextBox.value);
        if (isNaN(result) || (result == undefined)) {
            outputBox.innerHTML = "Invalid Input, Try Again!";
        }
        else {
            outputBox.innerHTML = "Result : " + result;
        }
        inputTextBox.value = "";
    }
    catch (invalidSyntax) {
        outputBox.innerHTML = "Invalid Input, Try Again!";
        inputTextBox.value = "";
    }
}

function keyStuff(event) {
    var x = event.charCode || event.keyCode;
    if (x == 13)
        calculate();
}