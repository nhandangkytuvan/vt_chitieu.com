$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
$(document).ready(function() {
	$('.list-group-item a').each(function(index, el) {
        if($(el).attr('href')==location.href){
            $(el).parent('li.list-group-item').addClass('active');
        }
    });
});