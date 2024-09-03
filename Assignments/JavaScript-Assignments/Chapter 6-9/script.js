// // Question Number 1

var arithmetic = 5;
document.write("Result : " + "<br>");
document.write("The value of a is : " + arithmetic + "<br>");

++arithmetic;
document.write("The value of ++a is : " + arithmetic + "<br>");
document.write("Now the value of a is : " + arithmetic + "<br>");

arithmetic++;
document.write("The value of a++ is : " + arithmetic + "<br>");
document.write("Now the value of a is : " + arithmetic + "<br>");

--arithmetic;
document.write("The value of --a is : " + arithmetic + "<br>");
document.write("Now the value of a is : " + arithmetic + "<br>");

arithmetic--;
document.write("The value of a-- is : " + arithmetic + "<br>");
document.write("Now the value of a is : " + arithmetic + "<br>");

// // Question Number 2

var a = 22;
document.write("A is : " + a + "<br>");
var b = 11;
document.write("B is : " + b + "<br>");
var result = --a;
document.write("Result after --a is : " + result + "<br>");
var result = --a - --b;
document.write("Result after --a - --b is : " + result + "<br>");
var result = --a - --b + ++b;
document.write("Result after --a - --b + ++b is : " + result + "<br>");
var result = --a - --b + ++b + b;
document.write("Result after --a - --b + ++b + b is : " + result + "<br>");

// // Question Number 3

var enterNumber = prompt("Enter the number");
document.write("Greeting " + enterNumber + "<br>");

// // Question Number 5

var enterTableNumber = prompt("Enter the Table Number that you want");
for (i = 1; i <= 10; i++) {
  document.write(
    enterTableNumber + " X " + i + " = " + i * enterTableNumber + "<br>"
  );
}

// Question Number 6

// a) Take three subjects name from user and store them in 3
// different variables.

var subject1 = prompt("Enter Subject Number 1");
var subject2 = prompt("Enter Subject Number 2");
var subject3 = prompt("Enter Subject Number 3");
var totalMarks = 100;
var obtMarkSub1 = Number(prompt("Enter Obtained Marks of Subject 1"));
var obtMarkSub2 = Number(prompt("Enter Obtained Marks of Subject 2"));
var obtMarkSub3 = Number(prompt("Enter Obtained Marks of Subject 3"));
var totalObtMarks = obtMarkSub1 + obtMarkSub2 + obtMarkSub3;
var ResultPercentage =
  ((obtMarkSub1 + obtMarkSub2 + obtMarkSub3) / (totalMarks * 3)) * 100;
document.write("Subject Total Marks Obtained Marks Percentage" + "<br>");
document.write(
  subject1 +
    " " +
    totalMarks +
    " " +
    obtMarkSub1 +
    " " +
    (obtMarkSub1 / totalMarks) * 100 +
    "%" +
    "<br>"
);
document.write(
  subject2 +
    " " +
    totalMarks +
    " " +
    obtMarkSub2 +
    " " +
    (obtMarkSub2 / totalMarks) * 100 +
    "%" +
    "<br>"
);
document.write(
  subject3 +
    " " +
    totalMarks +
    " " +
    obtMarkSub3 +
    " " +
    (obtMarkSub3 / totalMarks) * 100 +
    "%" +
    "<br>"
);
document.write(
  totalMarks * 3 + " " + totalObtMarks + " " + ResultPercentage + "%"
);
