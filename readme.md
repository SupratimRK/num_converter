# 📊 YouTube Number Formatter Chrome Extension  

A lightweight Chrome extension that converts large numbers on YouTube (e.g., subscribers, views) into easy-to-read formats like **K/M** or **Both** (Default + K/M). Perfect for users who prefer a cleaner look or work with different numbering conventions!  

---

## ✨ Features  

1. **Smart Number Formatting**  
   - Converts numbers in **lakh/crore** to **K/M** (e.g., `4.98 Crore → 49.80M`).  
   - Supports three modes:  
     - **Default (Lakh/Cr):** Keeps numbers in the original format.  
     - **K/M:** Converts to thousand (K) or million (M).  
     - **Both:** Shows both formats (e.g., `4.98 Crore (49.80M)`).  

2. **Customizable Settings**  
   - Toggle **decimal values** (e.g., `49.80M` vs. `50M`).  
   - Choose **lowercase units** (e.g., `12k, 1m`) for a minimalistic look.  
   - Change themes between **dark** 🌙 and **light** 🌞 mode.  

3. **Live Updates**  
   - Automatically updates numbers in real time as you browse YouTube.  

4. **User-Friendly Interface**  
   - Clean and intuitive settings page with toggles and radio buttons.  

---

## 🚀 How to Use  

1. **Install the Extension**  
   - Add the extension to Chrome.  

2. **Customize Your Preferences**  
   - Click on the extension icon in your browser toolbar.  
   - Adjust settings:  
     - Enable/disable decimals.  
     - Choose your number format.  
     - Toggle between light/dark themes.  

3. **Enjoy a Cleaner YouTube Experience**  
   - Numbers on YouTube will now be formatted according to your settings.  

---

## ⚙️ Settings  

### Options  

- **Include Decimal Values:**  
  - ON: Shows decimals (e.g., `49.80M`).  
  - OFF: Rounds numbers (e.g., `50M`).  

- **Use Lowercase Units:**  
  - ON: Displays `k/m` instead of `K/M`.  

- **Number Format:**  
  - **Default (Lakh/Cr):** Keeps Indian numbering format.  
  - **K/M:** Converts to thousand/million.  
  - **Both:** Displays both formats for comparison.  

- **Theme:**  
  - Toggle between dark and light mode for the settings page.  

---

## 🛠️ Development  

### Code Features  

1. **Text Parsing and Conversion**  
   - Uses regex to detect and format numbers in `lakh` and `crore` formats.  

2. **Efficient DOM Observing**  
   - Monitors page changes (e.g., loading new videos) for real-time updates.  

3. **User Preferences**  
   - Stores settings in Chrome's local storage for persistent customization.  

### Technology Stack  

- **Languages:** JavaScript, HTML, CSS.  
- **Chrome APIs:** Storage, Tabs, and MutationObserver.  

---

## 💡 Why Use This Extension?  

- **Simplify Numbers:** Understand large numbers at a glance, no matter your preferred format.  
- **Customizable Look:** Tailor the appearance of numbers to match your style.  
- **Effortless Integration:** Works seamlessly with YouTube for a hassle-free experience.  

---

## 🎨 Screenshots  

### Settings Page  
> **Dark Mode** 🌙  
![Dark Mode Settings](https://i.ibb.co/Wx9Sg6R/image-2024-12-04-201709877.png)  

> **Light Mode** 🌞  
![Light Mode Settings](https://i.ibb.co/p0JH3BZ/image-2024-12-04-201247299.png)  

---

## 🔧 How to Contribute  

1. Fork this repository.  
2. Create a new branch: `git checkout -b feature-name`.  
3. Make changes and commit: `git commit -m 'Add feature-name'`.  
4. Push to your forked repository: `git push origin feature-name`.  
5. Open a pull request.  

---

## 📄 License  

This project is licensed under the MIT License.  

---

## 💬 Feedback  

Have suggestions or found a bug? Feel free to create an issue or reach out! 😊  
