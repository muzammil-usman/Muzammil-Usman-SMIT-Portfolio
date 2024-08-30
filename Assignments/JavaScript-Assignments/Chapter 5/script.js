// Question Number 1

// let addNum1 = Number(prompt("Enter your first number"));
// let addNum2 = Number(prompt("Enter your second number"));

// let additionResult = addNum1 + addNum2;
// document.write("The result of addition is : " + additionResult + "<br>");

// // Question Number 2

// let substractNum1 = prompt("Enter your first number");
// let substractNum2 = prompt("Enter your second number");

// let substractResult = substractNum1 - substractNum2;
// document.write("The result of subtraction is : " + substractResult + "<br>");

// let multiplyNum1 = prompt("Enter your first number");
// let multiplyNum2 = prompt("Enter your second number");

// let multiplicationResult = multiplyNum1 * multiplyNum2;
// document.write(
//   "The result of multiplication is : " + multiplicationResult + "<br>"
// );

// let divisionNum1 = prompt("Enter your first number");
// let divisionNum2 = prompt("Enter your second number");

// let divisionResult = divisionNum1 / divisionNum2;
// document.write("The result of division is : " + divisionResult + "<br>");

// Question Number 3

// A: Declare a variable

let questionNum3;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

document.write("Value after variable declaration is " + questionNum3 + "<br>");

//c. Initialize the variable with some number.

questionNum3 = 3;

// d. Show the value of variable in your browser like “Initial value: 5”.

document.write("Initial value :" + questionNum3 + "<br>");

// e. Increment the variable.

questionNum3++;

// f. Show the value of variable in your browser like “Value after increment is: 6”.

document.write("Value after increment is : " + questionNum3 + "<br>");

// g. Add 7 to the variable.

questionNum3 = 4 + 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.

document.write("Value after addition is : " + questionNum3 + "<br>");

// i. Decrement the variable.

questionNum3--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.

document.write("Value after decrement is : " + questionNum3 + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.

questionNum3 = 10 / 3;

// l. Output.

document.write("The remainder is : " + questionNum3 + "<br>");

// Question Number 4

let movieTicket = 600;
let totalCost = movieTicket * 5;

document.write("Total cost to buy 5 tickets to movie is " + totalCost + "<br>");

// Question Number 5

let tableOf5 = 5;
let fiveOne = tableOf5 * 1;
document.write("5 x 1 = " + fiveOne + "<br>");
fiveOne = tableOf5 * 2;
document.write("5 x 2 = " + fiveOne + "<br>");
fiveOne = tableOf5 * 3;
document.write("5 x 3 = " + fiveOne + "<br>");
fiveOne = tableOf5 * 4;
document.write("5 x 4 = " + fiveOne + "<br>");
fiveOne = tableOf5 * 5;
document.write("5 x 5 = " + fiveOne + "<br>");
fiveOne = tableOf5 * 6;
document.write("5 x 6 = " + fiveOne + "<br>");
fiveOne = tableOf5 * 7;
document.write("5 x 7 = " + fiveOne + "<br>");
fiveOne = tableOf5 * 8;
document.write("5 x 8 = " + fiveOne + "<br>");
fiveOne = tableOf5 * 9;
document.write("5 x 9 = " + fiveOne + "<br>");
fiveOne = tableOf5 * 10;
document.write("5 x 10 = " + fiveOne + "<br>");

// Question Number 6

//a. Store a Celsius temperature into a variable.

let celsius = 32;
let farhenheit = 15;
let celsiusConvertor = ((farhenheit - 32) / 9) * 5;
let farhenheitConvertor = (celsius * 9) / 5 + 32;
document.write("32C is " + celsiusConvertor + "F" + "<br>");
document.write("15F is " + farhenheitConvertor + "C" + "<br>");

// Question Number 7

// a : Price of item 1

let item1 = 100;
document.write("Price of item 1 : " + item1 + "<br>");

// c Ordered quantity of item 1

let item1_orderQuantity = 3;
document.write("Quantity of item 1 is : " + item1_orderQuantity + "<br>");

// b. Price of item 2

let item2 = 200;
document.write("Price of item 2 : " + item2 + "<br>");

// d. Ordered Quantity of item 2

let item2_orderQuantity = 4;
document.write("Quantity of item 2 is : " + item2_orderQuantity + "<br>");

// e. Shipping charges

let shippingCharges = 300;
document.write("Shipping Charges is : " + shippingCharges + "<br>");

let totalPrice =
  item1 * item1_orderQuantity + item2 * item2_orderQuantity + shippingCharges;

document.write("Total cost of your order is : " + totalPrice + "<br>");

// Question Number 8

let totalMarks = 550;
document.write("Total marks is : " + totalMarks + "<br>");
let obtainedMarks = 337;
document.write("Obtained marks is : " + obtainedMarks + "<br>");

let percentage = (obtainedMarks / totalMarks) * 100;
document.write("Percentage " + percentage + "<br>");

// Question Number 9

let usDollar = 104.8 * 10;
let saudiRiyal = 28 * 25;

let totalCurrency = usDollar + saudiRiyal;
document.write("Total Currency in PKR is : " + totalCurrency);
