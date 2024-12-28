var score = 75;
var msg;

if (score >= 50) {
    msg = 'Поздравляем!';
    msg += ' Переходите к следующем этапу.';
}

var el = document.getElementById('answer');
el.textContent = msg;