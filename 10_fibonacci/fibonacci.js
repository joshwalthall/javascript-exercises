const fibonacci = function(numberPosition) {
    let previousNumber = 1;
    let currentNumber = 1;
    
    if (numberPosition < 0) {
        return "OOPS";
    } else if (numberPosition === 1 || numberPosition === 2) {
        return 1;
    } else {
        let nextNumber = 0;
        for (let i = 3; i <= numberPosition; i++) {
            nextNumber = previousNumber + currentNumber;
            previousNumber = currentNumber;
            currentNumber = nextNumber;
        };
        return currentNumber;
    };
};

// Do not edit below this line
module.exports = fibonacci;
