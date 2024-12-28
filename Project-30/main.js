var elements = document.getElementsByTagName('li');
elements[0].className = 'red';
elements[0].textContent = 'Red Nodelist[0]';
elements[1].className = 'green';
elements[1].textContent = 'Green Nodelist[1]';
elements[2].className = 'blue';
elements[2].textContent = 'Blue Nodelist[2]';
document.getElementById('lenght').textContent = elements.length + ' elements';