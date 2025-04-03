# JavaScript Calculator

A simple web-based calculator built using **HTML, CSS, and JavaScript**. This calculator allows users to perform basic arithmetic operations and provides essential features like **clear (AC)** and **delete (DEL)** functionality.

## 🚀 Features

- **Basic Arithmetic Operations**: Addition, Subtraction, Multiplication, and Division.
- **Evaluate Expressions (`=`)**: Instantly calculates the result.
- **Clear Input (`AC`)**: Resets the calculator.
- **Delete Last Character (`DEL`)**: Removes the last digit or operator.
- **Interactive UI**: Buttons respond to user clicks.

## 🛠️ Technologies Used

- **HTML**: Structure of the calculator.
- **CSS**: Styling and layout.
- **JavaScript**: Handles logic and user interactions.

## 📜 Code Overview

```javascript
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
```

## 📌 How to Use

1. Clone the repository or download the files.
2. Open the `index.html` file in your browser.
3. Click on the calculator buttons to perform operations.


## 🤝 Contributing
Feel free to improve the project! Fork it and create a pull request with your enhancements.

## 📜 License
This project is **open-source** and available under the **MIT License**.

---

💡 **Enjoyed this project? Give it a ⭐ and share your feedback!**

