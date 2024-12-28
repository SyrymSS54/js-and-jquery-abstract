var itemTwo = document.getElementById('two');

var elText = itemTwo.firstChild.nodeValue;

elText = elText.replace('кедровые орешки','белокочанная капуста');

itemTwo.firstChild.nodeValue = elText;

document.getElementById('four').textContent = itemTwo;

//document.getElementById возвращает список чтобы обратиться к узлу,
//надо указать номер в список,например,firstChield