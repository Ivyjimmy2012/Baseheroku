    function back(){
        history.back();
    
    };

    function reloader(){
    	window.location.reload(true);
    };



 





function show_success_report(sucess_text, input_field, time_length){



        $('div.info-modal-container').show().animate({right: '0%'});

        $('div.info-modal').css( {'color': "black",'background': "var(--gradient)"} );


        $('div#info-modal-body').html('<b>' + sucess_text + "</b>")


        $(input_field).css( {'border': "3px solid green"} );


        if (time_length != true ){ 

            /*if info modal container is visible at any point in time, leave it for five secs and then remove it*/
            if ($('div.info-modal-container:visible') ){

                    setTimeout(function()  { $('div.info-modal-container').fadeOut(2500).animate({right: '-120%'}) } , time_length);
            }

        }//if stay forever


        else{

            setTimeout(function()  { $('div.info-modal-container').fadeOut(18500).animate({right: '-120%'}) } , 2000);
        }




};






function show_error_report(error_text, input_field, stay_longer ){



        $('div.info-modal-container').show().animate({right: '0%'});

        $('div.info-modal').css( {'border': "3px solid #ff9999",'color': "white",'background': "#ff9999"} );


        $('div#info-modal-body').html('<b>' + error_text + "</b>")


        $(input_field).css( {'border': "3px solid #ff9999"} );



        if (stay_longer != true ){ 

            /*if info modal container is visible at any point in time, leave it for five secs and then remove it*/
            if ($('div.info-modal-container:visible') ){

                    setTimeout(function()  { $('div.info-modal-container').fadeOut(2500).animate({right: '-120%'}) } , 5000);
            }

        }//if stay forever


        else{

            setTimeout(function()  { $('div.info-modal-container').fadeOut(18500).animate({right: '-120%'}) } , 5000);
        }




};




    if ($('div#flashes:visible') ){

            setTimeout(function()  { $('div#flashes').hide(1500) } , 5000);
    }




$(document).on('click', '.svg-loader', function(){

$('.svg-loader').hide();

})



window.addEventListener('keydown', function(e) { 
    
if (e.keyCode == 83 && event.ctrlKey) {
e.preventDefault();
} 

});
  




$(document).on('click', '.body_loader', function(){

$('.body_loader').hide();

})





function scroll_to_top(){



$('html, body').animate({
    scrollTop: $("a.header_link").offset().top
}, 500);


                
                

};






$(document).ready(function(){




if (window.matchMedia('(max-width: 600px)').matches)
{

/*alert("mobile");*/
   AOS.init({
      offset: -400,
      duration: 600,
      delay: 0,
    });

}else{

/*alert("desktop");

*/

   AOS.init({
      offset: -100,
      duration: 600,
      delay: 0,
    });
}





var vid = document.getElementById("pulum");

function play_msg_tone() {
    vid.play();
}









});







$(document).ready(function(){

  $(document).on('click','.info-modal-container', function(){

        $('div.info-modal-container').animate({right: '-120%'}).hide(300) ;


    });







  $(document).on('click','a.header_link', function(){

            $('.table').show(100);
            $('.search').show(100);
            $('.header_link').show(100);

            add_active_to_feed();

            scroll_to_top();

            /*initialise the loader*/
            show_body_loader();        


             no_data_retry_count = 0
             counter=0;
             posts_count = 20;
             post_value = 'normal'

             console.log(no_data_retry_count,counter, posts_count, post_value);

             show_search();

            var action_type = 'feed'
            // window.alert(post_type)

            req = $.ajax({  
                url: '/',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'action_type' : action_type } )
 
            });

    /*      window.alert('ajax query block passed')*/

            req.done(function(data){
                

             $("#everything").fadeIn(100).html(data);        


            });

    });












});

