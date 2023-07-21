// reference to the emoji
const emojiElement = document.getElementById('emoji');

// change emoji every 1 second
setInterval(() => {
    if (emojiElement.textContent === "😃") {
        emojiElement.textContent = "😊";
    } else {
        emojiElement.textContent = "😃";
    }
}, 1000);