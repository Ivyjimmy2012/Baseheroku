$("#inpt_search").on('focus', function () {
    $(this).parent('label').addClass('search_active');
/*     $('header_link').css("color", "black");*/
});

$("#inpt_search").on('blur', function () {
    if($(this).val().length == 0)
        $(this).parent('label').removeClass('search_active');
});