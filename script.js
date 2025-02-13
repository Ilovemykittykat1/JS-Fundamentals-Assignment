document.write("<h2>Part 1</h2>");
let studentName = "Katherine McNeil";
let studentAge = 41;
let isEnrolled = true;

document.write("<h3>Variables, Data Types & Type Casting</h3>");
document.write(`Student name is ${studentName} `);
document.write("<br>");
document.write(`Student age is ${studentAge} `);
document.write("<br>");
document.write(`Is student enrolled :  ${isEnrolled} `);
document.write("<h3>Type Casting</h3>");
document.write(" Before casting, the type of studentAge is :  " + typeof studentAge);
document.write("<br>");
studentAge = String(studentAge);
document.write(" After casting, the type of studentAge is :  " + typeof studentAge);
document.write("<br>");

document.write("<h1>Step 2</h1>");
let num1 = Number(prompt("Please enter a number", "2"));
let num2 = Number(prompt("Please enter another number", "2"));

document.write("This is adding two variables together: " + (num1 + num2) + "<br>");
document.write("This is subtracting two variables together: " + (num1 - num2) + "<br>");
document.write("This is multiplying two variables together: " + (num1 * num2) + "<br>");
document.write("This is dividing two variables together: " + (num1 / num2) + "<br>");
document.write("This is when modulus is used on the two variables together: " + (num1 % num2) + "<br>");

document.write("<h1>Step 3</h1>");
let age = Number(prompt("Please enter your age", "18"));
if (age >= 18) {
    document.write("You are eligible to vote!<br>");
} else {
    document.write("You are not eligible to vote yet.<br>");
}

document.write("<h1>Step 4</h1>");
for (let i = 1; i < 11; i++) {
    document.write(" " + i);
}

let num3;
do {
    num3 = Number(prompt("Please enter number greater than 10", "14"));
} while (num3 <= 10);

document.write("<h1>Perfect job! You are amazing!</h1>");
