const removeFromArray = function(inputArray, ...removeList) {            
    let outputArray = []
    for (let i = 0; i < inputArray.length; i++) {
        if (!removeList.includes(inputArray[i])) {
            outputArray.push(inputArray[i]);
        };
    };
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
