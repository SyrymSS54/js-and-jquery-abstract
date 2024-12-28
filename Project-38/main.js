//Создаем новый узел
var newLi = document.createElement('li');

//Создаем текстовый узел
var newText = document.createTextNode('Свежий инжир');

//подкрепляем текстовый узел к новому созданаму узлу
newLi.appendChild(newText);

//находим адрес узла куда будем вставлять новый узел
var position = document.getElementsByTagName('ul')[0];

//подкрепляем новый узел к полученнуму адреса узла
position.appendChild(newLi);