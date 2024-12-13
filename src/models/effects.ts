
const typingSpeed = 100; // milliseconds per character
const erasingSpeed = 50; // milliseconds per character
const delayBetweenWords = 2000; // delay between words

let textIndex = 0;
let charIndex = 0;
let isErasing = false;

const textArray = ["Hello, world!", "Welcome to my site.", "Enjoy your stay!"];
let element;

export function type(elemento:any) {
  element = elemento
  const currentText = textArray[textIndex];
  
  if (!isErasing && charIndex < currentText.length) {
    element!.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else if (isErasing && charIndex > 0) {
    element!.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(type, erasingSpeed);
  } else {
    isErasing = !isErasing;
    
    if (!isErasing) {
      textIndex = (textIndex + 1) % textArray.length;
    }
    setTimeout(type, delayBetweenWords);
  }
}
