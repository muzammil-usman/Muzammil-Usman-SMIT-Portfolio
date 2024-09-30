// Question 1 Nahi aaraha

// Question Number 2

let integerA = Number(prompt("Enter your First Value"));
let integerB = Number(prompt("Enter your Second Value"));

if (integerA > integerB) {
  document.write("Integer A is greater ".concat(integerA));
}
if (integerB > integerA) {
  document.write("Integer B is greater ".concat(integerB));
} else {
  alert("Alphabets not allowed");
}

// Question Number 3

let userinput = Number(prompt("Enter the number"));

if (userinput > 0) {
  alert("The number is positive");
} else if (userinput < 0) {
  alert("The number is negative ");
} else {
  alert("The value is 0");
}
// Question 4 nahi aaraha

// Question Number 5

let enterPW = prompt("Enter your password");
let userPassword = "Rohit13579";
if (enterPW === userPassword) {
  document.write("Welcome Rohit");
} else if (enterPW == undefined) {
  alert("Please enter your password");
} else {
  alert("Enter the correct password");
}

// Question Number 6

var greeting = Number(prompt("Enter the time"));
if (greeting < 18) {
  alert("Good Morning");
} else {
  alert("Good Evening");
}

//  Question Number 7

var time = Number(prompt("Enter the time"));

if (time >= 0 && time < 1200) {
  alert("Good Morning");
} else if (time >= 1200 && time < 1700) {
  alert("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
  alert("Good Evening");
} else if (time >= 2100 && time < 2359) {
  alert("Good Night");
}
