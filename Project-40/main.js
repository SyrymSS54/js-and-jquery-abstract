var firstItem = document.getElementById('zero');
var twoItem = document.getElementById('scriptResults');

if (firstItem.hasAttribute('class')) {
    twoItem.textContent = 'Есть аттрибут';
} else {
    twoItem.textContent = 'Нету аттрибута';
}