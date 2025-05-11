function greetUser(userName) {
  return `Welcome back, ${userName}!`;
}

// Create input and button elements
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter your name";

let button = document.createElement("button");
button.textContent = "Greet Me";

let message = document.createElement("p");

// Add elements to the page
document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(message);

// Add event listener to button
button.addEventListener("click", function() {
  let name = input.value;
  message.textContent = greetUser(name);
});
