// Function to convert numbers in "K/M" or "Both" modes
function convertNumberFormat(text, userOptions) {
  const { includeDecimal, useLowerCase, format } = userOptions;

  // Helper function to format numbers
  const formatNumber = (number, unit) => {
    const formatted = includeDecimal
      ? number.toFixed(2).replace(/\.00$/, "") // Include decimals
      : Math.round(number); // Round if decimals not included
    return `${formatted}${useLowerCase ? unit.toLowerCase() : unit}`;
  };

  if (format === "default") return text; // Do nothing in default mode

  // Conversion logic
  return text
    .replace(/(\d+(\.\d+)?)\s*lakh/gi, (_, num) => {
      const value = parseFloat(num);
      const lakhText = `${value} L`;

      if (format === "k-m" || format === "both") {
        const converted = value * 100; // Convert lakh to K
        const kOrM =
          converted >= 1000
            ? formatNumber(converted / 1000, "M") // Convert K to M
            : formatNumber(converted, "K");
        return format === "both" ? `${lakhText} (${kOrM})` : kOrM;
      } else {
        return lakhText; // Default "Lakh/Cr"
      }
    })
    .replace(/(\d+(\.\d+)?)\s*crore/gi, (_, num) => {
      const value = parseFloat(num);
      const croreText = `${value} Cr`;

      if (format === "k-m" || format === "both") {
        const converted = value * 10; // Convert crore to M
        const m = formatNumber(converted, "M");
        return format === "both" ? `${croreText} (${m})` : m;
      } else {
        return croreText; // Default "Lakh/Cr"
      }
    });
}

// Function to process nodes in the DOM
function processYouTubeNodes(node, userOptions) {
  if (node.nodeType === Node.TEXT_NODE) {
    const originalText = node.textContent;
    const convertedText = convertNumberFormat(originalText, userOptions);

    if (originalText !== convertedText) {
      node.textContent = convertedText;
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    for (let child of node.childNodes) {
      processYouTubeNodes(child, userOptions);
    }
  }
}

// Start observing the DOM
function startYouTubeConversion(userOptions) {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const addedNode of mutation.addedNodes) {
        if (
          addedNode.nodeType === Node.ELEMENT_NODE ||
          addedNode.nodeType === Node.TEXT_NODE
        ) {
          processYouTubeNodes(addedNode, userOptions);
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  processYouTubeNodes(document.body, userOptions); // Initial processing
}

// Load user preferences and start conversion
chrome.storage.local.get(["extensionEnabled", "userOptions"], (result) => {
  if (result.extensionEnabled !== false) {
    const userOptions = result.userOptions || {
      includeDecimal: true,
      useLowerCase: false,
      format: "default", // Default format (do nothing)
    };
    startYouTubeConversion(userOptions);
  }
});
