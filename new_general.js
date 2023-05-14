
$(document).ready(function(){


    $(document).on('click','#depobtn', function(){

        $('.pay-modal').css({'display':'flex'}).show(900);

    });


    $(document).on('click','.pay_modal_close', function(){

        $('.pay-modal').hide(900);

    });




});

