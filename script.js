// Part One - Mastering JavaScript Basics //

// greeting program

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");

alert(`Hello, ${name}! You are ${age} years old.`);

// Even/Odd Checker

let number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
    alert(`${number} is an even number.`);
} else {
    alert(`${number} is an odd number.`);
}

// Grade Evaluator

let score = parseFloat(prompt("Enter your score (0-100):"));

if (score >= 90) {
    alert("Grade: A");
} else if (score >= 80) {
    alert("Grade: B");
} else if (score >= 70) {
    alert("Grade: C");
} else if (score >= 60) {
    alert("Grade: D");
} else {
    alert("Grade: F");
}

// Part Two - JavaScript Functions //

// Function to calculate total cost
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Function to format a greeting
function formatGreeting(name) {
    return `Welcome to the site, ${name}!`;
}

console.log(calculateTotal(50, 3));   
console.log(formatGreeting("Shadrack"));



// Part Three - Loops //

// Multiplication Table Generator

for (let num = 1; num <= 10; num++) {
    console.log(`4 * ${num} = ${4 * num}`);
}

// Countdown Timer

let myNumber = 10

while (myNumber >= 1) {
    console.log(myNumber)
    myNumber--;
}

// Part Four - DOM Manipulation //

// 1. Button to Show Greeting
document.getElementById("greetBtn").addEventListener("click", function() {
    let name = document.getElementById("nameInput").value;
    let age = document.getElementById("ageInput").value;

    let message = formatGreeting(name) + ` You are ${age} years old.`;
    document.getElementById("greetingOutput").innerText = message;
});

// 2. Dynamic Multiplication Table
document.getElementById("tableBtn").addEventListener("click", function() {
    let number = document.getElementById("tableInput").value;
    let outputDiv = document.getElementById("tableOutput");
    outputDiv.innerHTML = ""; 

    for (let i = 1; i <= 10; i++) {
        let line = document.createElement("p");
        line.textContent = `${number} x ${i} = ${number * i}`;
        outputDiv.appendChild(line);
    }
});

// 3. Toggle Theme (light/dark mode)
document.getElementById("themeToggleBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});

