const palindromes = function (inputText) {
    const regex = /[^a-zA-Z0-9]/g;
    let deformattedText = inputText.replace(regex, "");
    deformattedText = deformattedText.toLowerCase();
    let splitTextArray = deformattedText.split("");
    let reverseTextArray = splitTextArray.reverse();
    let reversedText = reverseTextArray.join("");
    if (reversedText === deformattedText) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
