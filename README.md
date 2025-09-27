# 📌 JSL02 Task Input and Status Validation System

## 📖 Project Overview
This project is part of my CodeSpace bootcamp.  
It is a simple JavaScript-based task entry system where users input task details, and the program validates them for consistency and accuracy.  
The focus is on **user interaction**, **validation**, and **clean code**.

---

## ✨ Features
- Prompt user to enter **two tasks** (title, description, and status).
- Automatically convert status input to **lowercase** for consistency.
- Validate task status, only allowing:
  - `todo`
  - `doing`
  - `done`
- **Alert the user** when they enter an invalid status.
- Keep prompting until a valid status is entered.
- Store task details in variables and an **array of objects**.
- Display completed tasks in the console in the format:  
  `Title: "Task 1", Status: "done"`
- If no tasks are marked as `done`, display a motivational message:  
  `"No tasks completed, let's get to work!"`

---

## 📂 Project Structure
project-folder/
│── index.html # HTML structure
│── style.css # Styling
│── test.js # JavaScript logic
│── assets/ # Logo and other assets


---

## 🚀 How to Run
1. Open **`index.html`** in a browser.
2. Follow the **prompts** to enter task details.
3. Open **Developer Tools → Console** to see the results.

---

## 🖼️ Screenshots
👉 *(Paste your screenshots here)*  

Example:
- Screenshot of the **prompt input**  
- Screenshot of the **console output when tasks are done**  
- Screenshot of the **console output when no tasks are done**

---

## 👩‍💻 Technologies Used
- **HTML**
- **CSS**
- **JavaScript**

---

## ✅ Learning Outcomes
- Linking external **JavaScript files** to HTML.
- Using `prompt()` and `alert()` for user interaction.
- **Data validation** and enforcing correct inputs.
- Using **arrays and objects** to structure data.
- Writing **clean, readable, and well-documented code**.

---

💡 *This project helped me understand user input handling, validation loops, and how to organize code for maintainability.*


**Prompt Input Example**

- The program must prompt users for task 1 title, descrition and status inputs, it must do the same for task 2 information

  ![title prompt](./explainer-images/title%20prompt.png)

**Invalid status**

- If the user enters a status other than `todo`, `doing` or `done`, the program must alert the user of this and return to prompting them to enter a status.

  ![invalid status](./explainer-images/invalid%20status.png)

**Console log**

- When there is a completed task:

  ![invalid status](./explainer-images/completed%20task%20log.png)

- When there are no completed tasks:

  ![invalid status](./explainer-images/no%20completed%20tasks%20log.png)
