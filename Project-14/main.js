var message;
message = '<h4>Math.PI:' + Math.PI + '</h4>';
message += '<h4>Math.round(4.45):' + Math.round(4.45) + ' ' + 'Math.round(4.6):' + Math.round(4.6) + '</h4>';
message += '<h4>Math.sqrt(9):' + Math.sqrt(9) + '</h4>';
message += '<h4>Math.ceil(4.5)' + Math.ceil(4.5) + '</h4>';
message += '<h4>Math.floor(4.5)' + Math.floor(4.5) + '</h4>';
message += '<h4>Math.random()' + Math.random() + '</h4>';

var el = document.getElementById('content');
el.innerHTML = message;