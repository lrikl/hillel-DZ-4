'use strict';

let userNameInput = prompt("Hi, what's your name?");
userNameInput = userNameInput?.trim();

if (!userNameInput) {
    alert("Error: no name")
}
else if (!isNaN(userNameInput)) {
    alert("Error: name cannot be only a number!")
}
else if (userNameInput.length < 2 || userNameInput.length > 20) {
    alert("Error: name must be between 2-20 characters")
}
else {
    alert(`Hello, ${userNameInput}! How are you?`)
}

