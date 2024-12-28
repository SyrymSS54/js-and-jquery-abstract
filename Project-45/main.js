function checkUsername(rf) {
    var elMsg = document.getElementById('feedback');

    if (this.value.length < rf ) {
        elMsg.textContent = 'Имя пользователя должно содержать не менее 5 символов';
    }
    else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur',function() {
    checkUsername(5);
},false)