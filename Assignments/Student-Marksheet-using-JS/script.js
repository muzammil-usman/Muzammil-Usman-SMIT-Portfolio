// Creation of function for percentage calculation
function percentageCalculator() {
  var per =
    englishMarks + urduMarks + mathsMarks + computerMarks + physicsMarks;
  var percen = (per / 500) * 100;
  return percen;
}
var studentPercentage = percentageCalculator;

// Taken prompts from user
var studentName = prompt("Enter your name");
if (studentName == "") {
  alert("Please Enter Your Name");
}
var englishMarks = Number(prompt("Enter English Subject Marks"));
var mathsMarks = Number(prompt("Enter Maths Subject Marks"));
var urduMarks = Number(prompt("Enter Urdu Subject Marks"));
var computerMarks = Number(prompt("Enter Computer Subject Marks"));
var physicsMarks = Number(prompt("Enter Physics Subject Marks"));

// Declaration of Main Div into a variable
var mainDiv = document.getElementById("main-div");

// Creation of h1 element and changing of inner text to student marksheet and make him append child of main div
var h1 = document.createElement("h1");
h1.innerText = "Marksheet";
mainDiv.appendChild(h1);

// Creation and assigning of result variable give him class and make him append child of main div
var result = document.createElement("div");
result.setAttribute("class", "studentResult");
mainDiv.appendChild(result);

// Status row of student name, percentage, grade and scholarship discount
var studentFrontName = document.createElement("p");
studentFrontName.innerText = "Student Name : " + studentName;
result.appendChild(studentFrontName);

var percentage = document.createElement("p");
percentage.innerText = "Percentage : " + studentPercentage();
result.appendChild(percentage);

var grade = document.createElement("p");
if (studentPercentage() >= 80) {
  grade.innerText = "Grade : A+";
} else if (studentPercentage() >= 70 && studentPercentage() < 80) {
  grade.innerText = "Grade : A";
} else if (studentPercentage() >= 60 && studentPercentage() < 70) {
  grade.innerText = "Grade : B";
} else if (studentPercentage() >= 40 && studentPercentage() < 60) {
  grade.innerText = "Grade : C";
} else if (studentPercentage() >= 20 && studentPercentage() < 40) {
  grade.innerText = "Grade : D";
} else {
  grade.innerText = "Grade : E";
}
result.appendChild(grade);

var overview = document.createElement("p");
if (studentPercentage() >= 75) {
  overview.innerText = "Scholarship Status : 25% Discount";
} else {
  overview.innerText = "Scholarship Status : Sorry! No Discount";
}
result.appendChild(overview);

// Creation of table element and make him append child of main div
var tableElement = document.createElement("table");
tableElement.setAttribute("border", "1");
mainDiv.appendChild(tableElement);

// First row of table starts from here
// All heading section starts
var tableRow1 = document.createElement("tr");
tableElement.appendChild(tableRow1);

var tableHeading1 = document.createElement("th");
tableHeading1.innerText = "Subject Name";

var tableHeading2 = document.createElement("th");
tableHeading2.innerText = "Total Marks";

var tableHeading3 = document.createElement("th");
tableHeading3.innerText = "Obtained Marks";

var tableHeading4 = document.createElement("th");
tableHeading4.innerText = "Status";

tableRow1.appendChild(tableHeading1);
tableRow1.appendChild(tableHeading2);
tableRow1.appendChild(tableHeading3);
tableRow1.appendChild(tableHeading4);

// Second row of table starts from here
var tableRow2 = document.createElement("tr");
tableElement.appendChild(tableRow2);

var tableHeadingR2_1 = document.createElement("td");
tableHeadingR2_1.innerText = "Maths";

var tableHeadingR2_2 = document.createElement("td");
tableHeadingR2_2.innerText = "100";

var tableHeadingR2_3 = document.createElement("td");
tableHeadingR2_3.innerText = mathsMarks;

var tableHeadingR2_4 = document.createElement("td");
if (mathsMarks >= 40) {
  tableHeadingR2_4.innerText = "Pass";
} else {
  tableHeadingR2_4.innerText = "Fail";
}

tableRow2.appendChild(tableHeadingR2_1);
tableRow2.appendChild(tableHeadingR2_2);
tableRow2.appendChild(tableHeadingR2_3);
tableRow2.appendChild(tableHeadingR2_4);

// Thirds row of table starts from here
var tableRow3 = document.createElement("tr");
tableElement.appendChild(tableRow3);

var tableHeadingR3_1 = document.createElement("td");
tableHeadingR3_1.innerText = "English";

var tableHeadingR3_2 = document.createElement("td");
tableHeadingR3_2.innerText = "100";

var tableHeadingR3_3 = document.createElement("td");
tableHeadingR3_3.innerText = englishMarks;

var tableHeadingR3_4 = document.createElement("td");
if (englishMarks >= 40) {
  tableHeadingR3_4.innerText = "Pass";
} else {
  tableHeadingR3_4.innerText = "Fail";
}

tableRow3.appendChild(tableHeadingR3_1);
tableRow3.appendChild(tableHeadingR3_2);
tableRow3.appendChild(tableHeadingR3_3);
tableRow3.appendChild(tableHeadingR3_4);

// Fourth row of table starts from here
var tableRow4 = document.createElement("tr");
tableElement.appendChild(tableRow4);

var tableHeadingR4_1 = document.createElement("td");
tableHeadingR4_1.innerText = "Urdu";

var tableHeadingR4_2 = document.createElement("td");
tableHeadingR4_2.innerText = "100";

var tableHeadingR4_3 = document.createElement("td");
tableHeadingR4_3.innerText = urduMarks;

var tableHeadingR4_4 = document.createElement("td");
if (urduMarks >= 40) {
  tableHeadingR4_4.innerText = "Pass";
} else {
  tableHeadingR4_4.innerText = "Fail";
}

tableRow4.appendChild(tableHeadingR4_1);
tableRow4.appendChild(tableHeadingR4_2);
tableRow4.appendChild(tableHeadingR4_3);
tableRow4.appendChild(tableHeadingR4_4);

// Fifth row table starts from here
var tableRow5 = document.createElement("tr");
tableElement.appendChild(tableRow5);

var tableHeadingR5_1 = document.createElement("td");
tableHeadingR5_1.innerText = "Computer";

var tableHeadingR5_2 = document.createElement("td");
tableHeadingR5_2.innerText = "100";

var tableHeadingR5_3 = document.createElement("td");
tableHeadingR5_3.innerText = computerMarks;

var tableHeadingR5_4 = document.createElement("td");
if (computerMarks >= 40) {
  tableHeadingR5_4.innerText = "Pass";
} else {
  tableHeadingR5_4.innerText = "Fail";
}

tableRow5.appendChild(tableHeadingR5_1);
tableRow5.appendChild(tableHeadingR5_2);
tableRow5.appendChild(tableHeadingR5_3);
tableRow5.appendChild(tableHeadingR5_4);

// Sixth and last row of table starts from here
var tableRow6 = document.createElement("tr");
tableElement.appendChild(tableRow6);

var tableHeadingR6_1 = document.createElement("td");
tableHeadingR6_1.innerText = "Physics";

var tableHeadingR6_2 = document.createElement("td");
tableHeadingR6_2.innerText = "100";

var tableHeadingR6_3 = document.createElement("td");
tableHeadingR6_3.innerText = physicsMarks;

var tableHeadingR6_4 = document.createElement("td");
if (physicsMarks >= 40) {
  tableHeadingR6_4.innerText = "Pass";
} else {
  tableHeadingR6_4.innerText = "Fail";
}

tableRow6.appendChild(tableHeadingR6_1);
tableRow6.appendChild(tableHeadingR6_2);
tableRow6.appendChild(tableHeadingR6_3);
tableRow6.appendChild(tableHeadingR6_4);
