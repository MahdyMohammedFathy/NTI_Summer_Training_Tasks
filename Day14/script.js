// ----------------- Element Creation -----------------

document.getElementById('create-div').addEventListener('click', function() {
    const resultDiv = document.getElementById('creation-result');
    const div = document.createElement('div');
    div.textContent = 'New Element #1';
    div.className = 'list-item';
    resultDiv.appendChild(div);
    setInstructions(resultDiv, 'Created a new div element with styled content');
});

document.getElementById('create-text').addEventListener('click', function() {
    const resultDiv = document.getElementById('creation-result');
    const div = document.createElement('div');
    div.textContent = 'Text Element ' + Math.floor(Math.random() * 100);
    div.className = 'list-item';
    resultDiv.appendChild(div);
    setInstructions(resultDiv, 'Created a text element with styled content');
});

document.getElementById('create-html').addEventListener('click', function() {
    const resultDiv = document.getElementById('creation-result');
    const div = document.createElement('div');
    div.innerHTML = 'HTML Element with <span style="font-weight: bold;">styled</span> content ' + new Date().toLocaleTimeString();
    div.style.backgroundColor = 'purple';
    div.style.color = 'white';
    div.className = 'list-item';
    resultDiv.appendChild(div);
    setInstructions(resultDiv, 'Added new HTML content with styling');
});

document.getElementById('clear-elements').addEventListener('click', function() {
    const resultDiv = document.getElementById('creation-result');
    resultDiv.innerHTML = '';
    setInstructions(resultDiv, 'Cleared all elements');
});

// ----------------- Element Removal -----------------

document.getElementById('add-elements').addEventListener('click', function() {
    const resultDiv = document.getElementById('removal-result');
    for (let i = 1; i <= 3; i++) {
        const div = document.createElement('div');
        div.textContent = 'Removable Item #' + i;
        div.className = 'removable-item';
        resultDiv.appendChild(div);
    }
    setInstructions(resultDiv, 'Added three removable items');
});

document.getElementById('remove-last').addEventListener('click', function() {
    const resultDiv = document.getElementById('removal-result');
    if (resultDiv.lastChild) {
        resultDiv.removeChild(resultDiv.lastChild);
    }
    setInstructions(resultDiv, 'Removed last item');
});

document.getElementById('remove-first').addEventListener('click', function() {
    const resultDiv = document.getElementById('removal-result');
    if (resultDiv.firstChild) {
        resultDiv.removeChild(resultDiv.firstChild);
    }
    setInstructions(resultDiv, 'Removed first item');
});

document.getElementById('remove-all').addEventListener('click', function() {
    const resultDiv = document.getElementById('removal-result');
    resultDiv.innerHTML = '';
    setInstructions(resultDiv, 'Removed all items');
});

// ----------------- Element Styling -----------------

document.getElementById('inline-style').addEventListener('click', function() {
    const styleResult = document.getElementById('style-result');
    styleResult.style.color = 'white';
    styleResult.style.backgroundColor = 'purple';
    setInstructions(styleResult, 'Applied inline style: color and background color');
});

// ✅ FIXED: unique ID for styling toggle
document.getElementById('toggle-style-class').addEventListener('click', function() {
    const styleResult = document.getElementById('style-result');
    styleResult.classList.toggle('bg-info');
    setInstructions(styleResult, 'Toggled the bg-info class');
});

document.getElementById('get-computed').addEventListener('click', function() {
    const styleResult = document.getElementById('style-result');
    const computedStyle = getComputedStyle(styleResult);
    const fontSize = computedStyle.fontSize;
    const color = computedStyle.color;
    const backgroundColor = computedStyle.backgroundColor;

    const message = `Computed styles: font-size=${fontSize}, color=${color}, background=${backgroundColor}`;
    setInstructions(styleResult, message);
});

document.getElementById('reset-styles').addEventListener('click', function() {
    const styleResult = document.getElementById('style-result');
    styleResult.removeAttribute('style');
    styleResult.className = '';
    setInstructions(styleResult, 'Reset styles to default');
});

// ----------------- Attributes -----------------

document.getElementById('set-attributes').addEventListener('click', function() {
    const resultDiv = document.getElementById('attributes-result');
    const input = resultDiv.querySelector('input');
    input.setAttribute('placeholder', 'New placeholder text');
    input.setAttribute('title', 'Input Field');
    input.setAttribute('data-custom', 'customValue');
    input.setAttribute('aria-label', 'Test Input');
    input.setAttribute('disabled', true);
    setInstructions(resultDiv, 'Set multiple attributes and disabled the input');
});

document.getElementById('get-attributes').addEventListener('click', function() {
    const resultDiv = document.getElementById('attributes-result');
    const input = resultDiv.querySelector('input');
    const title = input.getAttribute('title') || 'N/A';
    const dataCustom = input.getAttribute('data-custom') || 'N/A';
    setInstructions(resultDiv, `Title: ${title} | Data-custom: ${dataCustom}`);
});

document.getElementById('data-attributes').addEventListener('click', function() {
    const resultDiv = document.getElementById('attributes-result');
    const input = resultDiv.querySelector('input');
    input.setAttribute('data-demoId', '12345');
    input.setAttribute('data-userRole', 'admin');
    setInstructions(resultDiv, 'Set data attributes: demoId=12345, userRole=admin');
});

document.getElementById('remove-attributes').addEventListener('click', function() {
    const resultDiv = document.getElementById('attributes-result');
    const input = resultDiv.querySelector('input');
    input.removeAttribute('data-example');
    setInstructions(resultDiv, 'Removed data-example attribute');
});

// ----------------- Content Manipulation -----------------

document.getElementById('inner-html').addEventListener('click', function() {
    const resultDiv = document.getElementById('content-result');
    const currentTime = new Date().toLocaleTimeString();
    resultDiv.innerHTML = `
        <div><strong>HTML Content</strong></div>
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
        <div>Generated at ${currentTime}</div>
    `;
    setInstructions(resultDiv, 'Used innerHTML to insert HTML content');
});

document.getElementById('text-content').addEventListener('click', function() {
    const resultDiv = document.getElementById('content-result');
    const currentTime = new Date().toLocaleTimeString();
    resultDiv.textContent = `This is plain text content. <tags> are shown as text. Generated at ${currentTime}`;
    setInstructions(resultDiv, 'Used textContent to insert plain text');
});

document.getElementById('insert-adjacent-html').addEventListener('click', function() {
    const resultDiv = document.getElementById('content-result');
    const currentTime = new Date().toLocaleTimeString();
    resultDiv.insertAdjacentHTML('beforeend', `<div style="border-left:3px solid red; margin:8px; padding:7px;">Appended content at ${currentTime}</div>`);
    setInstructions(resultDiv, 'Used insertAdjacentHTML to append content');
});

document.getElementById('reset-content').addEventListener('click', function() {
    const resultDiv = document.getElementById('content-result');
    resultDiv.textContent = 'Original content';
    setInstructions(resultDiv, 'Reset content to original');
});

// ----------------- Event Handling -----------------

let addEvent = function() {
    alert('You interacted with me!');
};

document.getElementById('add-events').addEventListener('click', function() {
    const resultDiv = document.getElementById('event-result');
    resultDiv.addEventListener('click', addEvent);
    setInstructions(resultDiv, 'Added click event listener');
});

document.getElementById('remove-events').addEventListener('click', function() {
    const resultDiv = document.getElementById('event-result');
    resultDiv.removeEventListener('click', addEvent);
    setInstructions(resultDiv, 'Removed click event listener');
});

// ----------------- DOM Traversal -----------------

document.getElementById('find-parent').addEventListener('click', function() {
    const child = document.getElementById('target');
    const parent = child.parentNode;
    parent.style.backgroundColor = '#e0e7ff';
    setTimeout(() => { parent.style.backgroundColor = ''; }, 4000);
    setInstructions(document.getElementById('traversal-result'), 'Highlighted parent of target element');
});

document.getElementById('find-children').addEventListener('click', function() {
    const parent = document.getElementById('traversal-result').firstElementChild;
    Array.from(parent.children).forEach(child => {
        child.style.backgroundColor = '#dbeafe';
    });
    setTimeout(() => {
        Array.from(parent.children).forEach(child => {
            child.style.backgroundColor = '';
        });
    }, 4000);
    setInstructions(document.getElementById('traversal-result'), 'Highlighted children');
});

document.getElementById('find-sibling').addEventListener('click', function() {
    const target = document.getElementById('target');
    const prev = target.previousElementSibling;
    const next = target.nextElementSibling;
    if (prev) prev.style.backgroundColor = '#dbeafe';
    if (next) next.style.backgroundColor = '#bfdbfe';
    setTimeout(() => {
        if (prev) prev.style.backgroundColor = '';
        if (next) next.style.backgroundColor = '';
    }, 2000);
    setInstructions(document.getElementById('traversal-result'), `Prev: ${prev ? prev.textContent.trim() : 'None'}, Next: ${next ? next.textContent.trim() : 'None'}`);
});

document.getElementById('query-grandchild').addEventListener('click', function() {
    const grandchild = document.querySelector('#traversal-result div div div');
    grandchild.style.backgroundColor = '#fde68a';
    setTimeout(() => { grandchild.style.backgroundColor = ''; }, 2000);
    setInstructions(document.getElementById('traversal-result'), `Found grandchild: "${grandchild.textContent.trim()}"`);
});

// ----------------- Animation -----------------

const animatedBox = document.getElementById('animated-box');
const moveBtn = document.getElementById('move');
const stopBtn = document.getElementById('stop-animation');
const transformBtn = document.getElementById('transform');
const colorBtn = document.getElementById('change-color');
let animationInterval;

moveBtn.addEventListener('click', () => {
    clearInterval(animationInterval);
    animatedBox.style.animation = '';
    animatedBox.style.transform = '';
    let left = parseInt(animatedBox.style.left) || 0;
    let top = parseInt(animatedBox.style.top) || 0;
    let dirX = 1, dirY = 1;
    animationInterval = setInterval(() => {
        if (left >= 250) dirX = -1;
        if (left <= 0) dirX = 1;
        if (top >= 100) dirY = -1;
        if (top <= 0) dirY = 1;
        left += 5 * dirX;
        top += 5 * dirY;
        animatedBox.style.left = left + 'px';
        animatedBox.style.top = top + 'px';
    }, 50);
    setInstructions(document.getElementById('animation-area'), 'Moving in zig-zag pattern...');
});

stopBtn.addEventListener('click', () => {
    clearInterval(animationInterval);
    animatedBox.style.animation = '';
    animatedBox.style.transform = '';
    setInstructions(document.getElementById('animation-area'), 'Animation stopped.');
});

transformBtn.addEventListener('click', () => {
    clearInterval(animationInterval);
    animatedBox.style.animation = 'zoomInOut 2s infinite';
    setInstructions(document.getElementById('animation-area'), 'Zooming in and out...');
});

colorBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    animatedBox.style.backgroundColor = randomColor;
    setInstructions(document.getElementById('animation-area'), `Changed color to ${randomColor}`);
});

// ----------------- Class Manipulation -----------------

document.getElementById('add-class').addEventListener('click', function() {
    const target = document.getElementById('class-target');
    target.classList.add('highlight');
    setInstructions(target, 'Added "highlight" class');
});

document.getElementById('remove-class').addEventListener('click', function() {
    const target = document.getElementById('class-target');
    target.classList.remove('highlight');
    setInstructions(target, 'Removed "highlight" class');
});

// ✅ FIXED: separate toggle for Class Manipulation
document.getElementById('toggle-class').addEventListener('click', function() {
    const target = document.getElementById('class-target');
    target.classList.toggle('highlight');
    setInstructions(target, 'Toggled the "highlight" class');
});

document.getElementById('check-class').addEventListener('click', function() {
    const target = document.getElementById('class-target');
    const hasClass = target.classList.contains('highlight');
    setInstructions(target, hasClass ? 'Element has "highlight" class' : 'Element does not have "highlight" class');
});

document.getElementById('replace-class').addEventListener('click', function() {
    const target = document.getElementById('class-target');
    if (target.classList.contains('highlight')) {
        target.classList.replace('highlight', 'new-class');
        setInstructions(target, 'Replaced "highlight" class with "new-class"');
    } else {
        setInstructions(target, 'No "highlight" class to replace');
    }
});


// ----------------- Form Manipulation -----------------

document.getElementById('fill-form').addEventListener('click', function() {
    document.getElementById('form-name').value = 'John Doe';
    document.getElementById('form-color').value = 'blue';
    document.getElementById('form-subscribe').checked = true;
    document.getElementById('form-result').textContent = 'Form filled with default values.';
});

document.getElementById('get-values').addEventListener('click', function() {
    const name = document.getElementById('form-name').value;
    const color = document.getElementById('form-color').value;
    const subscribe = document.getElementById('form-subscribe').checked;
    document.getElementById('form-result').textContent = `Name: ${name}, Color: ${color}, Subscribe: ${subscribe}`;
});

document.getElementById('reset-form').addEventListener('click', function() {
    document.getElementById('form-name').value = '';
    document.getElementById('form-color').value = '';
    document.getElementById('form-subscribe').checked = false;
    document.getElementById('form-result').textContent = 'Form reset to empty values.';
});

// ----------------- Local Storage -----------------

document.getElementById('set-item').addEventListener('click', function() {
    const key = 'data';
    const value = document.getElementById('storage-input').value;
    localStorage.setItem(key, value);
    document.getElementById('storage-result').textContent = 'Data stored in local storage.';
});

document.getElementById('get-item').addEventListener('click', function() {
    const key = 'data';
    const value = localStorage.getItem(key) || 'No data found';
    document.getElementById('storage-result').textContent = `Retrieved: ${value}`;
});

document.getElementById('store-object').addEventListener('click', function() {
    const obj = {name: 'Mahdy Daoud', age: 21};
    localStorage.setItem('user', JSON.stringify(obj));
    document.getElementById('storage-result').textContent = 'Object stored in local storage.';
});

document.getElementById('clear-storage').addEventListener('click', function() {
    localStorage.clear();
    document.getElementById('storage-result').textContent = 'Local storage cleared.';
});

// ----------------- Advanced DOM -----------------

document.getElementById('clone-element').addEventListener('click', function() {
    const original = document.getElementById('advanced-result');
    const clone = original.cloneNode(true);
    original.parentNode.insertBefore(clone, original.nextSibling);
    document.getElementById('pp-result').textContent = 'Element cloned.';
});


function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
// Define the debounced function
const debouncedFunction = debounce(function() {
  console.log('Debounced function executed');
  document.getElementById('pp-result').textContent = 'Button clicked (check console for debounced output)';
}, 1000); // 1000ms (1 second) delay

// Attach the debounce function to the button's click event
document.getElementById('debounce').addEventListener('click', debouncedFunction);

document.getElementById('templates').addEventListener('click', function() {
    const advancedResult = document.getElementById('advanced-result');
    const templateDiv = document.createElement('div');
    templateDiv.className = 'bg-info text-white p-2 mt-2';
    templateDiv.style.borderRadius = '5px';
    const currentTime = new Date().toLocaleTimeString();
    templateDiv.textContent = `Template Content - Created at ${currentTime}`;

    advancedResult.appendChild(templateDiv);

    document.getElementById('pp-result').textContent = 'Template content added.';
});

document.getElementById('observer').addEventListener('click', function() {
    const advancedResult = document.getElementById('advanced-result');
    const observerDiv = document.createElement('div');
    observerDiv.className = 'bg-danger text-white p-2 mt-2';
    observerDiv.style.borderRadius = '5px';
    observerDiv.textContent = 'Observer is watching this area';

    advancedResult.appendChild(observerDiv);

    document.getElementById('pp-result').textContent = 'Observer message added.';
});

document.getElementById('advanced-result').addEventListener('click', function() {
    this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('pp-result').textContent = 'Color changed.';
});

// ----------------- Instructions Helper -----------------

function setInstructions(targetDiv, message) {
    const instruction = targetDiv.nextElementSibling || targetDiv.querySelector('.instructions');
    if (instruction) {
        instruction.textContent = message;
    }
}
