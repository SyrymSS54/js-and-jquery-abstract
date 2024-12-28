function efef() {
    $('li[id!="one"]').hide().delay(500).fadeIn(1500);
    $('li em').addClass('favorite');
    $('li.hot').addClass('colorr');
    $('li.hot').delay(750).removeClass('colorr');
}
$('li').on('click',efef);