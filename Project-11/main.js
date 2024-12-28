var arr = [document.title,document.lastModified,document.URL,document.domain];
var message = '<p>document.title:' + arr[0] + '</p>';
message += '<p>document.lastModified:' + arr[1] + '</p>';
message += '<p>document.URL:' + arr[2] + '</p>';
message += '<p>document.domain:' + arr[3] + '</p>';

var el = document.getElementById('document').innerHTML = message;
