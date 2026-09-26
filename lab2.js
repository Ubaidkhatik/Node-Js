                                                                                                                                                                                                  const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let todoList = [];

function showMenu() {
    console.log("\n--- Todo List Menu ---");
    console.log("1. Add Todo");
    console.log("2. View Todos");
    console.log("3. Delete Todo");
    console.log("4. Exit");

    rl.question("Enter your choice: ", choice => {
        switch (choice) {
            case "1":
                addTodo();
                break;
            case "2":
                viewTodos();
                break;
            case "3":
                deleteTodo();
                break;
            case "4":
                console.log("Exiting Todo List...");
                rl.close();
                break;
            default:
                console.log("Invalid choice!");
                showMenu();
        }
    });
}

function addTodo() {
    rl.question("Enter todo item: ", item => {
        todoList.push(item);
        console.log("Todo added successfully!");
        showMenu();
    });
}

function viewTodos() {
    console.log("\nYour Todo List:");
    if (todoList.length === 0) {
        console.log("No todos available.");
    } else {
        todoList.forEach((todo, index) => {
            console.log(`${index + 1}. ${todo}`);
        });
    }
    showMenu();
}

function deleteTodo() {
    rl.question("Enter todo number to delete: ", num => {
        if (num > 0 && num <= todoList.length) {
            todoList.splice(num - 1, 1);
            console.log("Todo deleted successfully!");
        } else {
            console.log("Invalid todo number!");
        }
        showMenu();
    });
}

// Start the application
showMenu();