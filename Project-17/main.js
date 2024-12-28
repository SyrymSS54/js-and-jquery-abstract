var today = new Date();
var year = today.getFullYear();
var est = new Date('Jan 31, 2000 12:00:00');

var dif = today.getTime() - est.getTime();
dif = dif/31556900000;

var msg = document.getElementById('time');
msg.textContent = Math.floor(dif);

