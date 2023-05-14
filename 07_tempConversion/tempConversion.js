const convertToCelsius = function(farenheitTemp) {
  let celsiusTemp = (farenheitTemp - 32) * (5/9);
  
  if (!Number.isInteger(celsiusTemp)) {
    celsiusTemp = parseFloat(celsiusTemp.toFixed(1));
  }
  
  return celsiusTemp;
};

const convertToFahrenheit = function(celsiusTemp) {
  let farenheitTemp = (celsiusTemp * (9/5) + 32);

  if (!Number.isInteger(farenheitTemp)) {
    farenheitTemp = parseFloat(farenheitTemp.toFixed(1));
  }
  
  return farenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
