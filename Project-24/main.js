var level;
var title;

function switchLevel(level) {

    switch(level){
        case 'Один':
            title = 'Уровень 1';
            break;

        case 'Два':
            title = 'Уровень 2';
            break;
            
        case 'Три':
            title = 'Уровень 3';
            break;
            
        default:
            title = 'Тест';
            break;    
    }
    return title;
}

level = 'Два';

var el = document.getElementById('answer');
el.textContent = switchLevel(level);