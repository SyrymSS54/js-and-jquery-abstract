var today = new Date();
var q = document.getElementById('dayMonth').textContent = today.getDate();
var w = document.getElementById('dayWeek').textContent = today.getDay()+1;
var e = document.getElementById('fullYear').textContent = today.getFullYear();
var r = document.getElementById('hourDay').textContent = today.getHours()+1;
var t = document.getElementById('ms').textContent = today.getMilliseconds();
var y = document.getElementById('minutes').textContent = today.getMinutes()+1;
var u = document.getElementById('month').textContent = today.getMonth()+1;
var i = document.getElementById('second').textContent = today.getSeconds()+1;
var o = document.getElementById('time').textContent = today.getTime();
var p = document.getElementById('UTC').textContent = today.getTimezoneOffset();
var a = document.getElementById('dateStr').textContent = today.toDateString();
var s = document.getElementById('timeStr').textContent = today.toTimeString();
var d = document.getElementById('str').textContent = today.toString();