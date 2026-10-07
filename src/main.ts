/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project by Cassidy, Aarohan and Aaron</h1>
  <p>Sheep Counter: <span id="counter">0</span></p>
  <button id="increment">Click Me!</button>
  <p>Count sheep to sleep!</p>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  counter++;
  let newText = counter.toString() + "\n";

  for (let i = 0; i < counter; i++) {
    newText = newText + " 🐑";
  }
  //insert comment here
  counterElement.textContent = newText;
});
