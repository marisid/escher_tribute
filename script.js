$(document).on('click','.navbar-collapse',function(evt) {
    if( $(evt.target).is('.navbar-nav a')) {
        $(this).collapse('hide');
    }
});