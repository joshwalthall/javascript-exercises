const reverseString = function(inputText) {
    inputTextArray = inputText.split("");
    outputText = '';
    for (let i = 0; i < inputText.length; i++) {
        nextChar = inputTextArray.pop();
        outputText += nextChar;
    }
    return outputText;
};

// Do not edit below this line
module.exports = reverseString;
