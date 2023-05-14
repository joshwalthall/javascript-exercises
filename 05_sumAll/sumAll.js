const sumAll = function(numberOne, numberTwo) {
    let startNum = Math.min(numberOne, numberTwo);
    let endNum = Math.max(numberOne, numberTwo);

    if (numberOne < 0
        || numberTwo < 0
        || typeof numberOne != "number"
        || typeof numberTwo != "number"
        ) {
        return "ERROR"
    } else {
        let sum = 0;
        for (let i = startNum; i <= endNum; i++) {
            sum += i;
        }
        return sum;
    };       
};

// Do not edit below this line
module.exports = sumAll;
