let tasks = [
    { id: 1, title: "Complete project proposal", priority: "HIGH", status: "Pending" },
    { id: 2, title: "Team meeting preparation", priority: "MEDIUM", status: "Pending" },
    { id: 3, title: "Update project documentation", priority: "LOW", status: "Completed" }
];

let recipes = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        cuisine: "Italian",
        cookingTime: "20 minutes",
        ingredients: ["spaghetti", "eggs", "pancetta", "parmesan", "black pepper"],
        instructions: [
            "Cook pasta",
            "Fry pancetta",
            "Mix eggs with cheese",
            "Combine and serve"
        ]
    }
];

function viewAllTasks() {
    let taskDisplay = "📝 --- YOUR TASKS --- 📋\n";
    tasks.forEach((task) => {
        taskDisplay += `\nID: ${task.id}\nTitle: ${task.title}\nPriority: ${task.priority}\nStatus: ${task.status}\n-----------\n`;
    });

    alert(taskDisplay);
}

function addNewTask() {
    const title = prompt("Enter the task title:");
    const priority = prompt("Enter the task priority (HIGH, MEDIUM, LOW):");

    if (title && priority) {
        const newTask = {
            id: tasks.length + 1,
            title: title,
            priority: priority,
            status: "Pending"
        };
        tasks.push(newTask);
        alert("✅ Task added successfully!");
    } else {
        alert("⚠️ Task not added. Please provide all the required details.");
    }
}

function completeTask() {
    const taskId = parseInt(prompt("Enter the task ID to mark as completed:"));

    const task = tasks.find(t => t.id === taskId);

    if (task) {
        task.status = "Completed";
        alert("✅ Task marked as completed!");
    } else {
        alert("⚠️ Task not found. Please enter a valid task ID.");
    }
}

function deleteTask() {
    const taskId = parseInt(prompt("Enter the task ID to delete:"));

    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        alert("🗑️ Task deleted successfully!");
    } else {
        alert("⚠️ Task not found. Please enter a valid task ID.");
    }
}

function taskStatistics() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.status === "Completed").length;
    const highPriorityTasks = tasks.filter(t => t.priority === "HIGH").length;
    const pendingTasks = tasks.filter(t => t.status === "Pending").length;
    const completedPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    let statsDisplay = "--- TASK STATISTICS ---\n";
    statsDisplay += `Total Tasks: ${totalTasks}\n`;
    statsDisplay += `Completed: ${completedTasks} (${completedPercentage.toFixed(0)}%)\n`;
    statsDisplay += `High Priority: ${highPriorityTasks}\n`;
    statsDisplay += `Pending: ${pendingTasks}\n`;

    alert(statsDisplay);
}

function viewAllRecipes() {
    if (recipes.length === 0) {
        alert("⚠️ No recipes available.");
        return;
    }

    let recipeDisplay = "--- ALL RECIPES ---\n";
    recipes.forEach((recipe) => {
        recipeDisplay += `\n🍝 ${recipe.name}\n`;
        recipeDisplay += `🌍 Cuisine: ${recipe.cuisine}\n`;
        recipeDisplay += `⏲️ Cooking Time: ${recipe.cookingTime}\n`;
        recipeDisplay += `🥄 Ingredients: ${recipe.ingredients.join(", ")}\n`;
        recipeDisplay += `✏️ Instructions:\n`;
        recipe.instructions.forEach((instruction, index) => {
            recipeDisplay += `${index + 1}. ${instruction}\n`;
        });
        recipeDisplay += "-----------\n";
    });

    alert(recipeDisplay);
}

function addNewRecipe() {
    const name = prompt("Enter the recipe name:");
    const cuisine = prompt("Enter the cuisine:");
    const cookingTime = prompt("Enter the cooking time:");
    const ingredients = prompt("Enter the ingredients (separate by comma):").split(',');
    const instructions = prompt("Enter the instructions (separate by period):").split('.');

    if (name && cuisine && cookingTime && ingredients.length && instructions.length) {
        const newRecipe = {
            id: recipes.length + 1,
            name: name.trim(),
            cuisine: cuisine.trim(),
            cookingTime: cookingTime.trim(),
            ingredients: ingredients.map(ingredient => ingredient.trim()),
            instructions: instructions.map(instruction => instruction.trim()).filter(instruction => instruction)
        };
        recipes.push(newRecipe);
        alert("✅ Recipe added successfully!");
    } else {
        alert("⚠️ Recipe not added. Please provide all the required details.");
    }
}

function searchRecipe() {
    const recipeName = prompt("Enter the recipe name to search for:");

    const recipe = recipes.find(r => r.name.toLowerCase() === recipeName.trim().toLowerCase());

    if (recipe) {
        let recipeDisplay = "--- RECIPE DETAILS ---\n";
        recipeDisplay += `\n🍝 ${recipe.name}\n`;
        recipeDisplay += `🌍 Cuisine: ${recipe.cuisine}\n`;
        recipeDisplay += `⏲️ Cooking Time: ${recipe.cookingTime}\n`;
        recipeDisplay += `🥄 Ingredients: ${recipe.ingredients.join(", ")}\n`;
        recipeDisplay += `✏️ Instructions:\n`;
        recipe.instructions.forEach((instruction, index) => {
            recipeDisplay += `${index + 1}. ${instruction}\n`;
        });
        alert(recipeDisplay);
    } else {
        alert("⚠️ Recipe not found. Please enter a valid recipe name.");
    }
}

function randomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const recipe = recipes[randomIndex];

    let recipeDisplay = "--- RANDOM RECIPE ---\n";
    recipeDisplay += `\n🍝 ${recipe.name}\n`;
    recipeDisplay += `🌍 Cuisine: ${recipe.cuisine}\n`;
    recipeDisplay += `⏲️ Cooking Time: ${recipe.cookingTime}\n`;
    recipeDisplay += `🥄 Ingredients: ${recipe.ingredients.join(", ")}\n`;
    recipeDisplay += `✏️ Instructions:\n`;
    recipe.instructions.forEach((instruction, index) => {
        recipeDisplay += `${index + 1}. ${instruction}\n`;
    });
    alert(recipeDisplay);
}