// ====== Task Input and Status Validation System ======
// This program asks the user for 2 tasks (title, description, status),
// ensures the status is valid, and then shows completed tasks in the console.

// Function that keeps asking until the user enters a valid status
function getValidStatus(taskNumber) {
  let status;

  // Keep asking until the input is "todo", "doing", or "done"
  do {
    status = prompt(`Enter status for Task ${taskNumber} (todo / doing / done):`);

    if (status) {
      status = status.toLowerCase(); // convert input to lowercase
    }

    // Check if input is invalid
    if (status !== "todo" && status !== "doing" && status !== "done") {
      alert("Invalid status! Please enter todo, doing, or done.");
    }

  } while (status !== "todo" && status !== "doing" && status !== "done"); // repeat until valid

  return status;
}

// ====== Task 1: Get user input ======
let task1Title = prompt("Enter title for Task 1:");
let task1Description = prompt("Enter description for Task 1:");
let task1Status = getValidStatus(1);

// ====== Task 2: Get user input ======
let task2Title = prompt("Enter title for Task 2:");
let task2Description = prompt("Enter description for Task 2:");
let task2Status = getValidStatus(2);

// ====== Store tasks in an array of objects ======
let tasks = [
  { title: task1Title, description: task1Description, status: task1Status },
  { title: task2Title, description: task2Description, status: task2Status }
];

// ====== Show completed tasks ======
let completedTasks = tasks.filter(task => task.status === "done");

if (completedTasks.length > 0) {
  console.log("✅ Completed Tasks:");
  completedTasks.forEach(task => {
    // Match required format: Title: "Task 1", Status: "done"
    console.log(`Title: "${task.title}", Status: "${task.status}"`);
  });
} else {
  console.log("No tasks completed, let's get to work!");
}


