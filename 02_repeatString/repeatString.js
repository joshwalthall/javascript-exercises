const repeatString = function(inputString, iterationNum) {
    outputString = '';
    if (iterationNum >= 0) {
        for (let i = 0; i < iterationNum; i++) {
            outputString += inputString;
        }
    return outputString;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
