const convertToCelsius = function(F) {
  res = ((F - 32) / 1.8)
  return Math.round(res * 10) / 10;
};

const convertToFahrenheit = function(C) {
    res = ((C * 1.8) + 32)
    return Math.round(res * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
