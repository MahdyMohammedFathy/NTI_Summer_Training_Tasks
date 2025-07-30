function runArrayOperations() {
    let array = [10, 20, 30, 40, 50];
    let output = '--- ARRAY OPERATIONS ---\n\n';

    output += 'Original array: ' + JSON.stringify(array) + '\n\n';

    array.push(60);
    output += 'After push(60): ' + JSON.stringify(array) + '\n\n';


    let removed = array.pop();
    output += 'After pop(): ' + JSON.stringify(array) + ' (removed ' + removed + ')\n\n';


    let doubled = array.map(num => num * 2);
    output += 'Doubled values: ' + JSON.stringify(doubled) + '\n\n';


    let greaterThan25 = array.filter(num => num > 25);
    output += 'Numbers > 25: ' + JSON.stringify(greaterThan25) + '\n\n';


    let sum = array.reduce((accum, num) => accum + num, 0);
    output += 'Sum of numbers: ' + sum + '\n';


    let average = sum / array.length;
    output += 'Average: ' + average.toFixed(2);

    alert(output);
}












function runDataProcessing() {
    const products = [
        { category: "Electronics", name: "Laptop", price: 899.99 },
        { category: "Electronics", name: "Smartphone", price: 699.99 },
        { category: "Electronics", name: "Headphones", price: 199.99 },
        { category: "Furniture", name: "Desk Chair", price: 89.99 },
        { category: "Kitchen", name: "Coffee Mug", price: 9.99 }
    ];

    let output = '--- DATA PROCESSING ---\n\n';


    const totalProducts = products.length;
    const totalValue = products.reduce((sum, item) => sum + item.price, 0);
    const averagePrice = totalValue / totalProducts;

    output += 'Total products: ' + totalProducts + '\n';
    output += 'Total inventory value: $' + totalValue.toFixed(2) + '\n';
    output += 'Average price: $' + averagePrice.toFixed(2) + '\n\n';


    const productsByCategory = products.reduce((acc, product) => {
        acc[product.category] = acc[product.category] || [];
        acc[product.category].push(product.name);
        return acc;
    }, {});

    output += 'Products by category:\n' + JSON.stringify(productsByCategory, null, 2) + '\n\n';


    const skills = ["JavaScript", "Python", "SQL", "Recruitment", "Training", "Java", "C++", "Cloud", "SEO", "Content", "Social"];
    output += 'All skills: ' + skills.join(', ') + '\n';


    const uniqueSkills = Array.from(new Set(skills));
    output += 'Unique skills: ' + uniqueSkills.join(', ');

    alert(output);
}













function runStringOperations() {
    let text = "The quick brown fox jumps over the lazy dog. JavaScript is awesome!";
    let output = '--- STRING OPERATIONS ---\n\n';

    output += 'Original text: "' + text + '"\n\n';

    let upperText = text.toUpperCase();
    output += 'Uppercase: ' + upperText + '\n\n';


    let lowerText = text.toLowerCase();
    output += 'Lowercase: ' + lowerText + '\n\n';


    let index = text.indexOf('fox');
    output += 'Index of "fox": ' + index + '\n';


    let includesJs = text.includes('JavaScript');
    output += 'Includes "JavaScript"? ' + includesJs + '\n\n';


    let substring = text.substring(4, 19);
    output += 'Substring (4-19): "' + substring + '"\n\n';


    let splitText = text.split(' ');
    output += 'Split by spaces: ' + JSON.stringify(splitText) + '\n\n';


    let replacedText = text.replace('fox', 'cat');
    output += 'Replace "fox" with "cat": ' + replacedText;

    alert(output);
}












function runObjectOperations() {
    let person = {
        name: "Alice",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Techville"
        },
        hobbies: ["reading", "hiking"]
    };

    let output = '--- OBJECT OPERATIONS ---\n\n';

    output += 'Original object:\n' + JSON.stringify(person, null, 2) + '\n\n';


    output += 'Name: ' + person.name + '\n';
    output += 'City: ' + person.address.city + '\n\n';


    person.age = 31;
    output += 'After modifications:\n' + JSON.stringify(person, null, 2);

    alert(output);
}











function runFunctionOperations() {
    const square = (x) => x * x;
    const cube = (x) => x * x * x;
    const double = (x) => x * 2;

    const applyOperation = (x, operation) => operation(x);

    let counter = (() => {
        let count = 0;
        return () => (++count);
    })();

    let output = '--- FUNCTION OPERATIONS ---\n\n';

    output += 'square(5): ' + square(5) + '\n';
    output += 'cube(3): ' + cube(3) + '\n';
    output += 'double(8): ' + double(8) + '\n';
    output += 'applyOperation(4, square): ' + applyOperation(4, square) + '\n\n';
    

    output += 'Counter: ';
    output += counter() + ', ';
    output += counter() + ', ';
    output += counter();

    alert(output);
}










function runSearchOperations() {
    const products = [
        { name: "Laptop", category: "Electronics", price: 999.99 },
        { name: "Smartphone", category: "Electronics", price: 699.99 },
        { name: "Headphones", category: "Electronics", price: 149.99 },
        { name: "Desk Chair", category: "Furniture", price: 199.99 },
        { name: "Coffee Mug", category: "Kitchen", price: 9.99 }
    ];

    const employees = [
        { name: "John Doe", department: "IT", skills: ["JavaScript", "Python", "SQL"] },
        { name: "Jane Smith", department: "HR", skills: ["Recruitment", "Training"] },
        { name: "Mike Johnson", department: "IT", skills: ["Java", "C++", "Cloud"] },
        { name: "Sarah Williams", department: "Marketing", skills: ["SEO", "Content", "Social"] }
    ];

    const searchTerm = prompt("Enter a search term (product name, employee skill, etc.):");

    if (searchTerm === null || searchTerm.trim() === "") {
        return;
    }

    let output = `--- SEARCH RESULTS FOR "${searchTerm}" ---\n\n`;

    // Search products
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    output += `Products (${filteredProducts.length}):\n`;
    filteredProducts.forEach(product => {
        output += `- ${product.name} (${product.category}): $${product.price.toFixed(2)}\n`;
    });
    output += '\n';

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    output += `Employees (${filteredEmployees.length}):\n`;
    filteredEmployees.forEach(employee => {
        output += `${employee.name} (${employee.department}): ${employee.skills.join(', ')}\n`;
    });

    alert(output);
}















function runSortOperations() {
    const products = [
        { name: "Laptop", price: 999.99 },
        { name: "Smartphone", price: 699.99 },
        { name: "Headphones", price: 149.99 },
        { name: "Desk Chair", price: 199.99 },
        { name: "Coffee Mug", price: 9.99 }
    ];

    const employees = [
        { name: "John Doe" },
        { name: "Jane Smith" },
        { name: "Mike Johnson" },
        { name: "Sarah Williams" }
    ];

    let output = '--- SORT OPERATIONS ---\n\n';

    const sortedProducts = products.sort((a, b) => b.price - a.price);
    output += 'Products by price (high to low):\n';
    sortedProducts.forEach(product => {
        output += `- ${product.name}: $${product.price.toFixed(2)}\n`;
    });
    output += '\n';

    const sortedEmployees = employees.sort((a, b) => a.name.localeCompare(b.name));
    output += 'Employees by name:\n';
    sortedEmployees.forEach(employee => {
        output += `- ${employee.name}\n`;
    });

    alert(output);
}











function runFilterOperations() {
    const products = [
        { name: "Laptop", price: 999.99, stock: 10 },
        { name: "Smartphone", price: 699.99, stock: 30 },
        { name: "Headphones", price: 149.99, stock: 50 },
        { name: "Desk Chair", price: 199.99, stock: 15 },
        { name: "Coffee Mug", price: 9.99, stock: 100 }
    ];

    const employees = [
        { name: "John Doe", department: "IT", skills: ["JavaScript", "Python", "SQL"] },
        { name: "Jane Smith", department: "HR", skills: ["Recruitment", "Training"] },
        { name: "Mike Johnson", department: "IT", skills: ["Java", "C++", "Cloud"] },
        { name: "Sarah Williams", department: "Marketing", skills: ["SEO", "Content", "Social"] }
    ];

    let output = '--- FILTER OPERATIONS ---\n\n';


    const filteredProducts = products.filter(product => product.price >= 100 && product.price <= 500);
    output += 'Products between $100 and $500:\n';
    filteredProducts.forEach(product => {
        output += `- ${product.name}: $${product.price.toFixed(2)}\n`;
    });
    output += '\n';


    const itEmployees = employees.filter(employee => employee.department === 'IT');
    output += 'IT Department Employees:\n';
    itEmployees.forEach(employee => {
        output += `- ${employee.name}: ${employee.skills.join(', ')}\n`;
    });
    output += '\n';


    const highStockElectronics = products.filter(product => product.category === "Electronics" && product.stock > 20);
    output += 'High stock electronics (stock > 20):\n';
    highStockElectronics.forEach(product => {
        output += `- ${product.name}: ${product.stock} in stock\n`;
    });

    alert(output);
}










function runMathOperations() {
    const firstNumber = parseFloat(prompt("Enter first number:"));
    const secondNumber = parseFloat(prompt("Enter second number:"));

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Please enter valid numbers.");
        return;
    }

    let output = '--- MATH OPERATIONS ---\n\n';

    output += `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}\n`;
    output += `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}\n`;
    output += `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}\n`;
    output += `${firstNumber} / ${secondNumber} = ${(firstNumber / secondNumber).toFixed(2)}\n`;
    output += `${firstNumber}^${secondNumber} = ${Math.pow(firstNumber, secondNumber)}\n\n`;

    output += `Square root of ${firstNumber}: ${Math.sqrt(firstNumber).toFixed(2)}\n`;
    output += `Random between ${firstNumber} and ${secondNumber}: ${Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber}`;

    alert(output);
}







function runDateOperations() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); 

    if (now > christmas) {
        christmas.setFullYear(now.getFullYear() + 1); 
    }

    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const daysUntilChristmas = Math.ceil((christmas - now) / millisecondsPerDay);

    const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()} ${now.toLocaleTimeString()}`;

    let output = '--- DATE OPERATIONS ---\n\n';
    output += `Current date/time: ${now.toString()}\n`;
    output += `Formatted: ${formattedDate}\n\n`;
    output += `Christmas this year: ${christmas.toDateString()}\n`;
    output += `Days until Christmas: ${daysUntilChristmas}\n\n`;
    output += `Date components:\n`;
    output += `- Year: ${now.getFullYear()}\n`;
    output += `- Month: ${now.getMonth() + 1}\n`;
    output += `- Day: ${now.getDate()}\n`;
    output += `- Hours: ${now.getHours()}\n`;
    output += `- Minutes: ${now.getMinutes()}\n`;

    alert(output);
}







function exitApplication() {
    const confirmExit = confirm("Are you sure you want to exit the application?");
    
    if (confirmExit) {
        alert("Thank you for using the JavaScript Operations App. Goodbye!");
    }
}






function runAdvancedFunctions() {

    const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

    const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

    const multiply = (x) => (y) => x * y;
    const double = multiply(2);

    let output = '--- ADVANCED FUNCTIONS ---\n\n';
    output += `Factorial of 5: ${factorial(5)}\n`;
    output += `Fibonacci(10): ${fibonacci(10)}\n\n`;

    output += `Currying: multiply(2)(5) = ${multiply(2)(5)}\n`;
    output += `Double 7: ${double(7)}\n`;

    alert(output);
}