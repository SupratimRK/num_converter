# 📊 YouTube Number Formatter Chrome Extension  

A lightweight Chrome extension that converts large numbers on YouTube (e.g., subscribers, views) into easy-to-read formats like **K/M** or **Both** (Default + K/M).  
Perfect for users who prefer a cleaner look or work with different numbering conventions! 😌  

---

## ✨ Features  

### 1. **Smart Number Formatting**  
- Converts Indian format (**lakh/crore**) to **K/M** (e.g., `4.98 Crore → 49.80M`).  
- Three modes available:  
  - 🟢 **Default (Lakh/Cr)**: No changes, classic Indian style.  
  - 🔵 **K/M**: Converts to international style.  
  - 🟣 **Both**: Shows both (e.g., `4.98 Crore (49.80M)`).  

### 2. **Customizable Settings**  
- Toggle decimal values (`49.80M` vs. `50M`).  
- Switch to **lowercase units** (`k/m`) for a minimalist vibe.  
- Choose between **dark** 🌙 and **light** 🌞 mode.  

### 3. **Live Updates**  
- Automatically formats numbers as you scroll or navigate — no refresh needed!  

### 4. **User-Friendly Interface**  
- Clean settings page with intuitive toggles, radio buttons, and instant previews.  

---

## 🚀 Installation & Setup  

### 🔧 How to Install (Developer Mode)  

1. Download or clone this repo:  
   ```bash
   git clone https://github.com/SupratimRK/num_converter.git
   ```

2. Open Chrome and go to:  
   ```
   chrome://extensions/
   ```

3. Enable **Developer mode** (top right).

4. Click **"Load unpacked"** and select the extension folder.

5. Boom! 🎉 You're good to go!

---

## ⚙️ Settings  

| Option | Description |
|-------|-------------|
| **Include Decimal Values** | Shows decimals like `49.80M` if enabled. |
| **Use Lowercase Units** | Shows `k/m` instead of `K/M`. |
| **Number Format** | Choose between: Default (Lakh/Cr), K/M, or Both. |
| **Theme** | Toggle between Light and Dark modes for the settings page. |

---

## 🖼️ Screenshots  

<table>
  <tr>
    <td align="center">
      <img src="https://i.ibb.co/Wx9Sg6R/image-2024-12-04-201709877.png" width="350px" />
      <br/><em>Dark Mode Settings</em>
    </td>
    <td align="center">
      <img src="https://i.ibb.co/p0JH3BZ/image-2024-12-04-201247299.png" width="350px" />
      <br/><em>Light Mode Settings</em>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://i.ibb.co/Wx9Sg6R/image-2024-12-04-201709877.png" width="350px" />
      <br/><em>Example with K/M</em>
    </td>
    <td align="center">
      <img src="https://i.ibb.co/p0JH3BZ/image-2024-12-04-201247299.png" width="350px" />
      <br/><em>Example with Both Format</em>
    </td>
  </tr>
</table>

---

## 🛠️ Under the Hood  

### 🔍 Code Highlights  

- **Regex magic**: Detects and parses Indian number formats.
- **MutationObserver**: Keeps watching for DOM changes (new videos, comments, etc.)
- **Chrome Storage API**: Saves your settings across sessions.

### 🧰 Tech Stack  
- **JavaScript** (vanilla — no frameworks)  
- **HTML + CSS**  
- **Chrome APIs**: `storage`, `tabs`, `runtime`, and `mutationObserver`

---

## 💡 Why This Extension?  

- 🔢 Understand large numbers at a glance  
- 🖌️ Customize the style to your vibe  
- 🤖 Works invisibly in the background  

---

## 🧑‍💻 Contributing  

Wanna help make this better? Love that energy! 💪  

1. Fork the repo.  
2. Create your feature branch:  
   ```bash
   git checkout -b feature/your-awesome-feature
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add your feature"
   ```
4. Push it:  
   ```bash
   git push origin feature/your-awesome-feature
   ```
5. Open a pull request and let’s collab!

---

## 📄 License  

This project is licensed under the **MIT License** — free to use, modify, and vibe with.

---

## 💬 Feedback & Suggestions  

Found a bug? Want a new feature? Slide into the issues tab or drop me a message 👇  
- **Email**: supratimrk@outlook.com  
- **Twitter**: [@SupratimRK](https://twitter.com/SupratimRK)

---

Thanks for using YouTube Number Formatter 💥  
Go flex those formatted numbers like a boss! 😎
