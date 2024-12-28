var startItem = document.getElementsByTagName('ul')[0];//document.getElementsByTagName возвращается массив с узлом(адресом),чтобы прямо получить доступ надо указать адрес[0] для получение доступа
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

firstItem.setAttribute('class','complete');
lastItem.setAttribute('class','cool');