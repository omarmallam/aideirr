# 🔢 Enhanced React Calculator

An improved version of the original React Calculator by Andrew H. Farmer — now with a modern twist.

---

## 🚀 What's New?

### 🧾 **Interactive Calculation History**
Keep track of everything you’ve calculated.

**Features:**
- See a complete list of previous calculations
- Tap any past result to reuse it instantly
- Toggle the history panel open/closed with ease

**How it works:**
- A new `History` component was built with a collapsible UI
- State is managed in the main `App` to track and update history
- Expressions are stored and formatted cleanly
- Focus was placed on an intuitive, clean interface for interacting with past results

---

### 🌓 **Light & Dark Mode Toggle**
Choose the theme that suits your vibe.

**Features:**
- Switch between light and dark themes with one click
- Preference is saved using `localStorage`, so your choice sticks
- Dark mode for late-night calculations and less eye strain

**Behind the scenes:**
- A dedicated `ThemeToggle` component handles the UI
- CSS variables power the dynamic theme changes
- User settings are remembered via `localStorage`
- A sleek dark theme was designed from scratch

---

## 🛠️ How It Was Built

### ⚙️ Setting Up
- Cloned and set up the original repo
- Installed dependencies and ensured everything ran smoothly
- Explored and mapped out the codebase structure

### 🧠 Planning Features
- Mapped out changes and components to be added
- Identified files to modify
- Sketched out feature behavior before coding

### 🤖 Aided by Aider
Development was assisted by Aider AI, making it more efficient:

- Introduced the history functionality first
- Integrated the theme switch next
- Finished up with persistent theme storage

### 🔍 Testing & Fine-tuning
- Manually tested all features for UX and functionality
- Addressed UI quirks and visual bugs
- Created unit tests for new components
- Adjusted interactions based on hands-on feedback

---

## 🧩 Real-World Hurdles

### 📌 Floating History Panel  
**Issue:** History pushed the layout instead of overlaying  
**Fix:** Used absolute positioning with `z-index` to float it cleanly

### 💾 Remembering Themes  
**Issue:** Theme reset on reload  
**Fix:** Saved the preference in `localStorage` and loaded it on start

### ✍️ Clean Expressions  
**Issue:** Messy and hard-to-read expressions  
**Fix:** Added formatting logic before storing them in history

---

## 💡 Commands Used with Aider

Aider simplified many tasks using helpful commands:

- `/add` – Included project files in the context  
- `/ask` – Asked questions about code logic  
- `/edit` – Made collaborative edits to files  
- `/ls` – Listed project contents  
- `/diff` – Reviewed changes pre-commit  
- `/run` – Started the app server  
- `/test` – Ran automated tests  
- `/commit` – Finalized and saved edits with commit messages

---

## 🔮 What’s Next?

Some possible additions in future updates:

- Add a **Clear History** button  
- Support for more themes (e.g., solarized, high contrast)  
- Implement **keyboard shortcuts** for common actions  
- Allow **exporting history** as text or JSON

---

## 🧰 Setup Instructions

Want to run it yourself?

```bash
git clone https://github.com/your-username/react-calculator.git
cd react-calculator
npm install
npm start
