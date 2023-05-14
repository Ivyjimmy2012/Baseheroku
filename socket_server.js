$(document).ready(function() {



    $(".svg-loader").fadeOut(1000, function() {
        $("body").fadeIn(1000);        
    });



    var vid = document.getElementById("pulum");

    function play_msg_tone() {
        vid.play();
    }



    var loading_box = $('.fake-msg-box-typing').clone();


    function hide_loading_msg(){

        loading_box.hide(200).addClass('hidden');
        $('.messages-wrap').remove(loading_box);

    };



    function show_loading_msg(){

        $('.messages-wrap').append(loading_box);
        loading_box.removeClass('hidden').show(200);

        setTimeout(function(){

            hide_loading_msg()

        }, 10000)

    };



socket = io();

// Event handler for new connections.
// The callback function is invoked when a connection with the
// server is established.
socket.on('connect', function() {
    //socket.emit('my_event', {data: 'I\'m connected!'});
    

$('.upwards-good-tick').show().css({display:'flex'}).fadeOut(1500).css({top:'60%'});

    setTimeout(function()  { 

    $('.upwards-good-tick').css({top:'80%'})

     } , 2500);


});


socket.on('disconnect', function() {
    //socket.emit('my_event', {data: 'I\'m connected!'});
    $('.upwards-bad-x').show().css({display:'flex'}).fadeOut(1500).css({top:'60%'});

});


socket.on('my_response', function(msg, cb) {
    $('#log').append('<br>' + $('<div/>').text('Received #' + msg.count + ': ' + msg.data).html());
    if (cb)
        cb();
});


socket.on('my_users_count_response', function(msg, cb) {
    $('#users_count').fadeOut().fadeIn().text(msg.users_count);

    console.log(msg.users_count);
    if (cb)
       cb();
});



$('form#emit').submit(function(event) {
    socket.emit('my_event', {data: $('#emit_data').val()});
    return false;
});
$('form#broadcast').submit(function(event) {
    socket.emit('my_broadcast_event', {data: $('#broadcast_data').val()});
    return false;
});
$('form#join').submit(function(event) {
    socket.emit('join', {room: $('#join_room').val()});
    return false;
});
$('form#leave').submit(function(event) {
    socket.emit('leave', {room: $('#leave_room').val()});
    return false;
});
$('form#send_room').submit(function(event) {
    socket.emit('my_room_event', {room: $('#room_name').val(), data: $('#room_data').val()});
    return false;
});
$('form#close').submit(function(event) {
    socket.emit('close_room', {room: $('#close_room').val()});
    return false;
});
$('form#disconnect').submit(function(event) {
    socket.emit('disconnect_request');
    return false;
});






    $(document).on('click', 'button.button-with-svg', function() {
       $(".svg-loader").fadeIn()      
    });






    socket.on('disconnect', function() {
        //socket.emit('my_event', {data: 'I\'m connected!'});
        $('.upwards-bad-x').show().css({display:'flex'}).fadeOut(1500).css({top:'60%'});

        var recipient = $('#send_private_message').attr('recipient');

        socket.emit('user_gone', {'username': recipient });



    });



    socket.on('user_gone', function(msg) {

        $('.'+'user_'+msg.data).css({'color':'grey'});

        $('.'+'dot_'+msg.data).css({'background':'grey'});

        console.log('user ' + msg.data + ' --->gone')

    });




    socket.on('user_gone_private', function(msg) {

        $('.'+'user_'+msg.data).css({'color':'grey'});

        $('.'+'dot_'+msg.data).css({'background':'grey'});

        console.log(msg.data + ' --->gone by clicking back button')

    });




    socket.on('new_text_post', function(msg) {

       console.log(  'author--->' + msg.data , 'html--->' + msg.data  )

        if ($('.'+'fl__'+msg.post_author).length != 0 ){

            var data = $(msg.data) ;

            data.hide().prependTo($('#myScrollSecondaryWrap')).show(100);


        };


        $('.trending_hashtags').fadeOut(100).fadeIn(100).html(msg.hashtag_html);


    });




    socket.on('deleted_post', function(msg) {

       console.log(  'author--->' + msg.data , 'html--->' + msg.data  )

        if ($('.'+msg.data).length != 0 ){

            var post_id = msg.data ;

            $('.'+post_id).animate({
                            
                            background:'#d9d9d9',
                            opacity: '0.2',
                            left: '-1020%',
                            height: '10px',
                            width: '10px',
                            

                        });

            setTimeout(function(){ $('.' + post_id).hide() },500);

            $('.post-options').hide();


        };

    });





    $('.back-button-private').submit(function(event) {
        //socket.emit('disconnect_request_private');
        alert('stop!');
        back();
        return false;
    });



        
    $('#send_private_message').on('click', function(){

        var d = new Date();

        var recipient = $(this).attr('recipient');

        var message_to_send = $('#message').val();

        var mesage_box = '<div class="box sb1" style = "transition: all ease 2s;"><pre class="sb-message-body" style="padding:13px" >' + message_to_send + '</pre> <span class="msg-timestamp">' +d.getHours() +  ' : ' + d.getMinutes() +  'am' + '</span></div>';

        if (message_to_send != '' ) {

            $('.messages-wrap').append(mesage_box);

            socket.emit('private_message', {'username': recipient, 'message':message_to_send })

        }
        

        $(".chat_preview").hide(200);
        $('#message').val('')

    });


    $('.submit_pic_XBg').on('click', function(){

        $(this).hide();   
        //$('#YfNx').click();     
        $(".chat_preview").hide(200);
        //$('#message').val('')

    });


    $('#submit_pic_form').on('submit', function(ev){

    ev.preventDefault();

    console.log('submitting 2');

    var recipient = $('#send_private_message').attr('recipient');

    var messaged_to_send = $('#message').val();

    socket.emit('private_message', {'username': recipient, 'message':messaged_to_send, 'picture': picture_url })
    //$('#message').val('')


    });



    socket.on('new_private_message', function(msg) {

        play_msg_tone();

        /*$('.fake-msg-box-typing').hide(100);*/

        hide_loading_msg();

        $('.messages-wrap').append(msg);

    });



    
    socket.on('new_session_data_generated', function(msg) {

/*        console.log('messsage ---->' + msg.data);

        $('.siddd').text(msg.data);
*/
   
        $('.'+'user_'+msg.data).css({'color':'green'});

        $('.'+'dot_'+msg.data).css({'background':'green'});

        console.log('user ' + msg.data + ' --->back online')

    });





    socket.on('update_pretty_comments', function(msg) {

        $('.'+'pretty-comments-sections'+msg.post_id).html(msg.message);

        console.log('append' + msg.message + ' to ' + msg.post_id)

    });







    $('textarea#message').on('keydown', function(){

        var message_to_send = $('#message').val();

        console.log(message_to_send);

        console.log(message_to_send.length);

        if (message_to_send == '' ||  message_to_send == ' ' || message_to_send.length <= 2 ){

             /*$('.fake-msg-box-typing').hide(100);*/
             hide_loading_msg();

        }else{

            var recipient = $('#send_private_message').attr('recipient');

/*            console.log(recipient);*/

            socket.emit('user_thats_typing', {'username': recipient,'message': message_to_send })

        }


    });





    socket.on('user_typing', function(msg) {
        console.log(msg, msg.length );

        if (msg == '' ||  msg == ' ' || msg.length <= 2 ){

             /*$('.fake-msg-box-typing').hide(100);*/
             hide_loading_msg();

        }else{

            /*$('.fake-msg-box-typing').show(100);*/
            show_loading_msg();

        }



    });






if ($('.messages-wrap').length != 0){

        $('.messages-wrap').animate({
            scrollTop: $(".btmanchor").offset().top
        }, 500);            

}







});//document.ready()




















