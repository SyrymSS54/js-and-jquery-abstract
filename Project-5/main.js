var greeting = 'Привет, ';
var name = 'Катерина';

var welcomeMessage = greeting + name + "!";

var el = document.getElementById("greeting");
el.textContent = welcomeMessage;