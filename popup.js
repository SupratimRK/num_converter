const decimalToggle = document.getElementById("decimal-toggle");
const lowercaseToggle = document.getElementById("lowercase-toggle");
const themeToggle = document.getElementById("theme-toggle");
const saveButton = document.querySelector(".button.save");
const resetButton = document.querySelector(".button.reset");
const formatRadios = document.getElementsByName("format");

// Load settings and initialize UI
chrome.storage.local.get(["userOptions"], (result) => {
  const userOptions = result.userOptions || {
    includeDecimal: true,
    useLowerCase: false,
    theme: "dark",
    format: "lakh-cr",
  };

  decimalToggle.checked = userOptions.includeDecimal;
  lowercaseToggle.checked = userOptions.useLowerCase;
  themeToggle.checked = userOptions.theme === "light";

  document.querySelector(
    `input[name="format"][value="${userOptions.format}"]`
  ).checked = true;

  applyTheme(userOptions.theme);
});

// Save settings
saveButton.addEventListener("click", () => {
  const selectedFormat = Array.from(formatRadios).find((radio) => radio.checked).value;

  const userOptions = {
    includeDecimal: decimalToggle.checked,
    useLowerCase: lowercaseToggle.checked,
    theme: themeToggle.checked ? "light" : "dark",
    format: selectedFormat,
  };

  chrome.storage.local.set({ userOptions }, () => {
    alert("Settings saved!");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.reload(tabs[0].id); // Reload the current tab
    });
  });
});

// Reset settings
resetButton.addEventListener("click", () => {
  const defaultOptions = {
    includeDecimal: true,
    useLowerCase: false,
    theme: "dark",
    format: "lakh-cr",
  };

  chrome.storage.local.set({ userOptions: defaultOptions }, () => {
    alert("Settings reset to default!");
    location.reload();
  });
});

// Apply theme
themeToggle.addEventListener("change", () => {
  const theme = themeToggle.checked ? "light" : "dark";
  applyTheme(theme);
});

function applyTheme(theme) {
  document.body.className = theme === "light" ? "light-mode" : "";
}
