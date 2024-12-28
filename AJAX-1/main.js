xq = function() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {

    if (xhr.status == 200) {
        responseObject = JSON.parse(xhr.responseText);

        var newContent = '';
        for (var i = 0;i<responseObject.events.length;i++){
            newContent += '<div class="event">';
            newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
            newContent += responseObject.events[i].date + '</p>';
            newContent += '<div>';
        }

        document.getElementById('content').innerHTML = newContent;
        }
    };

    xhr.open('GET','main.json',true);
    xhr.send(null);
}

rd =function() {
    $('.event').remove();
}


$('#bt').on('click',xq);
$('#rd').on('click',rd)