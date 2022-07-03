// INITIALIZE THE COUNT AS 0
// LISTEN FOR CLICKS ON THE INCREMENT BUTTON
// INCREMENT THE COUNT VARIABLE WHEN THE BUTTON IS CLICKED
// CHANGE THE COUNT-EL IN THE HTML TO REFRECT THE NEW COUNT
    
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let errorEl = document.getElementById("error-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}


function save() {
    saveEl.textContent += count+' - ';
    console.log(count);
    count = 0;
    countEl.textContent = count;
}







// EXERCISE 1

// let username = "sean";
// let message = "You have three new notifications";

// let messageToUser = username + ', ' + message + '!';

// console.log(messageToUser);

// let names = 'Sean';
// let greeting = 'Hi, my name is ';
// let myGreeting = greeting + names;
// console.log(myGreeting);

// let welcomeEl = document.getElementById("welcome-el")
// let name2 = 'Sean';
// let greeting2 = 'Welcome to JavaScript, ';
// let welcomeMsg = greeting2 + name2 + '!';
// welcomeEl.innerText = welcomeMsg;

// welcomeEl.innerText += " [-_-]";



// EXERCISE 2

// let firstName = 'Sean';
// let lastName = 'Chua';
// let fullName = firstName + ' ' + lastName;
// let greeting = 'Hi there,';

// function greetings() {
//     console.log(greeting + ' ' + fullName + '!');
// }

// greetings();


// EXERCISE 3 

// let myPoints = 3;

// function add3Points() {
//     myPoints += 3;
// }

// function remove1Point() {
//     myPoints -= 1;
// }

// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();


// console.log(myPoints);

// EXERCISE 4
// 22
// 18
// 65
// Mypoints: 59
// 4
// 1114

// EXERCISE 5

// function error() {
//     errorEl.textContent = 'Something went wrong, please try again.';
// }


// EXCERCISE 6 - CALCULATOR

let num1 = 8;
let num2 = 2;
let result = 0;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sum = document.getElementById("sum-el");

function add() {
    result = num1 + num2;
    sum.textContent = "Sum: " + result;
}

function substract() {
    result = num1 - num2;
    sum.textContent = "Sum: " + result;
}

function divide() {
    result = num1 / num2;
    sum.textContent = "Sum: " + result;
}

function multiply() {
    result = num1 * num2;
    sum.textContent = "Sum: " + result;
}

