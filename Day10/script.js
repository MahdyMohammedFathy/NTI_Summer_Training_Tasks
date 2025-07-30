function handleVariables() {
    const name = prompt("Enter your name:","Mahdy");
    const age = prompt("Enter your age:","20");
    const isActive = confirm("Are you active?");

    let message = `Name: ${name}\nAge: ${age}\nActive: ${isActive ? "Yes" : "No"}`;
    alert(message);
}

function handleOperations() {
    const age = prompt("Enter your age to check if you are an adult:","20");
    const num = 5 + 3;
    const isAdult = age >= 18;
    const isValid = true && false;
    
    let message = `Calculation Results:\nnum = 5 + 3 -> ${num}\nIs Adult: ${isAdult ? "Yes" : "No"}\nIs Valid: ${isValid ? "Yes" : "No"}`;
    alert(message);
}

function handleConditions() {
    const age = prompt("Enter your age to check status:","20");
    if (age >= 18) {
        alert("You are an Adult.");
    } else {
        alert("You are a Minor.");
    }
}

function handleLoops() {
    let output = "For Loop:\n";
    for (let i = 0; i < 5; i++) {
        output += i + "\n";
    }

    output += "\nWhile Loop:\n";
    let x = 5;
    while (x > 0) {
        output += x + "\n";
        x--;
    }
    
    alert(output);
}

function handleFunction() {
    const name = prompt("Enter a name to greet:", "mahdy");
    const message = greet(name);
    alert(message);
}

function greet(name) {
    return "Hello " + name;
}

function handleDayCheck() {
    const day = parseInt(prompt("Enter a day number (1-7):", "1"), 10);
    let message;

    if (day === 1) {
        message = "Monday";
    } else if (day === 2) {
        message = "Tuesday";
    } else {
        message = "Other day";
    }
    
    alert(message);
}