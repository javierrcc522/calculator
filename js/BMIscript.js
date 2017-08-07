var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseFloat(prompt("Enter your weight in kilograms:"));
var number2 = parseFloat(prompt("Enter your height in meters:"));
var result = divide(number1, (number2*number2));
alert("Your BMI is "+ result+ "kg/m^2");
