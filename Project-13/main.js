var message;
var number1 = 12;
var number2 = 12.536;
var number3 = 120000000;
message = '<h3>isNaN(number1):' + isNaN(number1) + '</h3>';
message += '<h3>number2.toFixed(1):' + number2.toFixed() + '</h3>';
message += '<h3>number2.toPrecision():' + number2.toPrecision() + '</h3>';
message += '<h3>number3.toExponential():' + number3.toExponential() + '</h3>';
var el = document.getElementById('content');
el.innerHTML = message;