const elementP = document.getElementById("text-typing-p");
const elementDiv = document.getElementById("text-typing-div");

let indexP = 0;
let indexDiv = 0;


/**
 * Type out a given text on a given DOM element.
 * This function is designed to be used with setInterval.
 * @param {string} text - The text to type out.
 * @param {HTMLElement} DOM_ELEMENT - The element to type the text out on.
 * @param {number} index - The current index in the string.
 * @param {number} intervalID - The ID of the interval returned by setInterval.
 * @returns {number} The new index.
 */
function typeText(text, DOM_ELEMENT, index, intervalID) {
    if (index < text.length) {
        DOM_ELEMENT.textContent += text[index];
        return index + 1;
    } else {
        clearInterval(intervalID); // Properly stop the interval
        return index;
    }
}

const intervalP = setInterval(() => {
    indexP = typeText('Hello World', elementP, indexP, intervalP);
}, 150);

const intervalDiv = setInterval(() => {
    indexDiv = typeText('Coding', elementDiv, indexDiv, intervalDiv);
}, 150);