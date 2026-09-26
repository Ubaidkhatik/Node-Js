// 1. Addition Function
function add(a, b) {
    return a + b;
}

// 2. Subtraction Function
function subtract(a, b) {
    return a - b;
}

// 3. Multiplication Function
function multiply(a, b) {
    return a * b;
}

// 4. Callback Function
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

// 5. Asynchronous Function
function delayedMessage() {
    setTimeout(() => {
        console.log("This message is displayed after 2 seconds (Asynchronous)");
    }, 2000);
}

// -----------------------
// Function Calls
// -----------------------

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));

greet("Ubaid", sayBye);

delayedMessage();