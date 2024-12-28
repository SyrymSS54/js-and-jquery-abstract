var pass = 50;
var score = 75;
var msg;

if (score >= pass) {
    msg = 'Поздравления пройдено!';
} else {
    msg = 'Повторите попытку!';
}

var el = document.getElementById('answer');
el.textContent = msg;