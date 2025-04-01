# ⏱️ JavaScript Stopwatch

A simple stopwatch built using **HTML, CSS, and JavaScript**. This project helps understand **DOM manipulation, event handling, and setInterval()** functions.

## 🚀 Features
- Start, Stop, and Reset functionality
- Millisecond precision
- Dynamic UI updates

## 📜 Code Overview

```javascript
startBtn.addEventListener("click", function(){
    if(timerId !== null) clearInterval(timerId);
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", function(){
    clearInterval(timerId);
});

resetBtn.addEventListener("click", function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00:00:00`;
    msec = secs = mins = 0;
});
```

## 🛠️ How to Use
1. Clone the repository or download the project files.
2. Open `index.html` in your browser.
3. Click the **Start** button to begin the stopwatch.
4. Click **Stop** to pause it.
5. Click **Reset** to set it back to 00:00:00.

## 📂 How to Push This Folder to an Existing GitHub Repository
If you have an existing repository (e.g., `js-projects`), follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your repository:
   ```sh
   cd path/to/js-projects
   ```
3. Copy or move your stopwatch project folder inside this repository.
4. Add the new folder to Git tracking:
   ```sh
   git add .
   ```
5. Commit the changes:
   ```sh
   git commit -m "Added JavaScript Stopwatch project"
   ```
6. Push to GitHub:
   ```sh
   git push origin main  # Change 'main' if your branch is different
   ```

✅ Done! Your stopwatch project is now pushed to your existing repository. 🎉

---
💡 Feel free to enhance the project by adding **lap time tracking**, **dark mode**, or other exciting features! 🚀
