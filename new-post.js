 





function show_success_report(sucess_text, input_field, stay_longer){



        $('div.info-modal-container').show().animate({right: '0%'});

        $('div.info-modal').css( {'color': "black",'background': "var(--gradient)"} );


        $('div#info-modal-body').html('<b>' + sucess_text + "</b>")


        $(input_field).css( {'border': "3px solid green"} );


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







function show_error_report(error_text, input_field, stay_longer ){



        $('div.info-modal-container').show().animate({right: '0%'});

        $('div.info-modal').css( {'border': "3px solid red",'color': "white",'background': "red"} );


        $('div#info-modal-body').html('<b>' + error_text + "</b>")


        $(input_field).css( {'border': "3px solid red"} );



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







function get_forms(clicked_element){


            var elememt = $(clicked_element);

            var command = elememt.attr('command');

            $(".svg-loader").fadeIn(100);

            $.ajax({


                    url: 'get_forms' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'command': command } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      $("#create-post-modal").hide(100).show(300).html(result);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });



};






function reset_form(clicked_element){


            var elememt = $(clicked_element);

            var command = elememt.attr('command');

            $(".svg-loader").fadeIn(100);

            $.ajax({


                    url: 'get_forms' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'command': command } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      console.log("rrrer" + result);
                      $("#create-post-modal").hide(100).html(result);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });



};






 $(document).ready(function(){



    $(".svg-loader").fadeOut();        




    if ($('div#flashes:visible') ){

            setTimeout(function()  { $('div#flashes').hide(1500) } , 5000);
    }








    function close(){
        $("#ShareModal").hide(100);
    }



    function showCommentModal(){


        $("#ShareModal").show(300);

/*        document.getElementById('ShareModal').style.display = "block";

*/

    }



















        var counter=0;
        var posts_count = 20;
        console.log('initial number of posts is --->' + posts_count);
        var caught_up_svg = '<svg viewBox="0 0 448 512" width="100" title="user-astronaut"><path d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z"></path></svg>'

        $(window).scroll(function () {
            if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                appendData();
                //alert('scrollTop--->' + $(window).scrollTop(),  'window height--->' + $(window).height(), 'doc height--->' + $(document).height())
            }
        });


        $('body').on('touchmove', appendDataMobile);



        function appendDataMobile() {


            if ($(window).scrollTop() >  $(document).height() - $(window).height() - 300 ) {

                                $(".svg-loader").fadeIn(1)

                                counter++;
                                
                                console.log('the current number of posts is --->' + posts_count);

                                req = $.ajax({  
                                    url: 'next-twenty-posts',
                                    type : 'POST',
                                    contentType: 'application/json',
                                    data : JSON.stringify ( {'offset' : posts_count } )

                                });


                                req.done(function(data){



                                    $(".svg-loader").fadeOut(500)

                                        if (data != "null" ){
                     
                                         $('#myScroll').append(data);

                                        }

                                        
                                        if (data == "null" ){

                                            
                                            if ($("#last-post").html() == undefined){


                                              $('#myScroll').append('<div id = "last-post" class="last-post"><!-- all caught up -->  ' + caught_up_svg + ' <p>you"re all caught up</p></div><!-- last-post -->');  


                                            }   


                                        }
                            



                                });

                            

                            posts_count += 20;


                //alert("phone" + 'scrollTop--->' + $(window).scrollTop(),  'window height--->' + $(window).height(), 'doc height--->' + $(document).height())
            }





        }


        function appendData() {

            $(".svg-loader").fadeIn(1)

            counter++;
            
            console.log('the current number of posts is --->' + posts_count);

            req = $.ajax({  
                url: 'next-twenty-posts',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'offset' : posts_count } )

            });


            req.done(function(data){



                $(".svg-loader").fadeOut(500)

                    if (data != "null" ){
 
                     $('#myScroll').append(data);

                    }

                    
                    if (data == "null" ){

                        
                        if ($("#last-post").html() == undefined){


                          $('#myScroll').append('<div id = "last-post" class="last-post"><!-- all caught up -->  ' + caught_up_svg + ' <p>you"re all caught up</p></div><!-- last-post -->');  


                        }   


                    }
        



            });

        

        posts_count += 20;


        }

















































    $(document).on('click','#create-post-form', function(){


    $("#create-post-modal").fadeIn(500);


    });



    $(document).on('click','.cancel-post', function(){


    $("#comment-modal").hide(100);

    reset_form('.cancel-post');


    });



    $(document).on('click','.close-modal', function(){

    $(".comment-modal-wrap").hide(100);

    reset_form('.cancel-post');


    });




    $(document).on('click','#select-image', function(){


    $(".preview-image-modal").show(100);


    });


    $(document).on('click','.js-export', function(){


    $(".preview-image-modal").hide(100);


    });



    $(document).on('click','#close-preview-svg', function(){


    $(".preview-image-modal").hide(100);


    });




    $(document).on('click','#close-view-modal', function(){


    var post_id = $(this).attr('post_id');

    $("#view-modal").hide(100);

    //$(".svg-loader").fadeIn();


    //console.log('new value is  ---> ' +  $('#update-text-portal' + post_id ).val().trim() )

    //var current_text = $('.desc' + post_id).text().trim();

    //console.log('current_text====>' + current_text);





            $.ajax({


                    url: 'refresh_pretty_comments' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'post_id': post_id } ),


                      success: function (result) {
                       /* console.log(result);*/
                      $(".svg-loader").fadeOut();

                      $('.pretty-comments-sections' + post_id).fadeOut(100).fadeIn(100).fadeOut(100).html('').html(result.pretty_comments).fadeIn(100);

                      $('.no-of-views' + post_id).fadeOut(100).fadeIn(100).fadeOut(100).html('').html(result.posts_count).fadeIn(100);

                      $('.no-of-comments' + post_id).fadeOut(100).fadeIn(100).fadeOut(100).html('').html(result.comments_count).fadeIn(100);



                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });
















    });








    $(document).on('click','#edit-post-svg', function(){

        $(".post-options").hide();

        var command = $(this).attr('command');

        //console.log($(this).attr('post_id'));

        var post_id = $(this).attr('post_id');

        var d = $('.' + post_id).find('.desc').text().trim();

        var desc = $('.' + post_id).find('.desc');

        var desc_bigger = $('.' + post_id).find('.desc-bigger' + post_id);

        console.log('your current post content---------> ', d);





    

        $('#update-text-portal' + post_id).css({ "margin-left": "60px", "border-radius" : "20px" });

/*        $(".update-submitted-text").css({'bottom':"unset", "margin-top":'-10px'});
*/
        desc_bigger.hide(100).show(300).html($('#post-edit-form' + post_id).css({"display":"block", "z-index":"3000" }));


        desc.hide(100).show(300).html($('#post-edit-form' + post_id).css({"display":"block", "z-index":"3000" })); 


        //desc.find($(".update-submitted-text")).attr("post_id",post_id);

        $(".update-submitted-text").attr('post_id', post_id);
        
        $("#submit-updated-svg").attr('post_id', post_id);





        if ($("#update-text-portal" + post_id).length >= 2) {

            console.log('2 forms detected!');

            console.log('its first element is' + $("#update-text-portal" + post_id)[2].val())

            /*desc.hide(100).show(300).html(d);*/

        }     



/*
        $(".svg-loader").fadeIn(100);

        $.ajax({


                url: 'get_forms' ,
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( { 'command': command,'post_id': post_id } ),


                  success: function (result) {

                  $(".svg-loader").fadeOut();
                  desc.hide(100).show(300).html(result);

                  },

                  error: function (result) {
                    $(".svg-loader").fadeOut();
                    show_error_report(" something went wrong with that ");
                  }


        });
*/


    });







    $(document).on('click','#submit-updated-svg', function(e){

        e.preventDefault();

        console.log($(this).attr('post_id'));

        var post_id = $(this).attr('post_id');



                $.ajax({


                    url: 'update_single_post' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'post_id': post_id, 'content': $('#update-text-portal' + post_id).val().trim() } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      show_success_report("changes made!");

                        //delete window.form_content;

/*
                        console.log('var reset!')*/

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });




            setTimeout(function()  {


                            $.ajax({


                                url: 'refresh_single_post' ,
                                type : 'POST',
                                contentType: 'application/json',
                                data : JSON.stringify ( { 'post_id': post_id } ),


                                  success: function (result) {
                                  $(".svg-loader").fadeOut();
                                  $('.' + post_id).fadeOut(100).html('').html(result).fadeIn(300);

                                  },

                                  error: function (result) {
                                    $(".svg-loader").fadeOut();
                                    show_error_report(" something went wrong with that ");
                                  }


                        });




            } , 1000);




    



    });







    $(document).on('click','#check-post', function(){

    var post_id = $(this).attr('post_id');

    var d = $('.' + post_id).find('.desc').text().trim();

    var desc = $('.' + post_id).find('.desc');

/*
        if ($("#post-edit-form" + post_id).length > 0) {

            console.log('form detected!');
            desc.hide(100).show(300).html(d);
        }
*/


        if ($("#post-edit-form" + post_id).length >= 2) {

            console.log('2 forms detected!');

            console.log('its first element is' + $("#post-edit-form" + post_id)[0])

            /*desc.hide(100).show(300).html(d);*/

        }     



    $("#view-modal").show(100);




    });




    $(document).on('click','#control-post', function(){

    $("#post-options").show(100).css({display:"flex"});


    });





   $(document).on('click','#cancel-add-account', function(){

        $(".account-parent-wrap").hide(200);


    });






   $(document).on('click','#bank-account-btn', function(){

        $(".svg-loader").fadeIn();

        $(".account-parent-wrap").show(100);

        var command = 'account_form' ;

            $.ajax({


                    url: 'get_bank_account_form' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'command': command } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      $(".account-wrap").show(100).html(result);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });



    });






    $(document).on('click','#post-types-child-event', function(){

        get_forms('#post-types-child-event');


    });





    $(document).on('click','#post-types-child-fundraiser', function(){

        get_forms('#post-types-child-fundraiser');


    });




   $(document).on('click','#post-types-child-lost', function(){

        get_forms('#post-types-child-lost');


    });





   $(document).on('click','#post-types-child-found', function(){

        get_forms('#post-types-child-found');


    });




/*   $(document).on('click','#save-new-account-number', function(){


        $("#add-new-account-form").find('input').each(function(){
       
                //$("#add-new-account-form").submit();

                setTimeout(function()  { $(this).val(''); } , 500);

                 

         });




    });

*/




    $(document).on('click','.post-options-front-btn', function(){

    var post_id = $(this).attr("post_id");

    $(".post-options-front-list" + post_id).show(100);

/*    console.log(post_id + 'im here')*/

    });









/*COMMMENTS*/



    $(document).on('click','.close-comment-modal', function(){

    var post_id = $(this).attr('post_id');

    $(".svg-loader").fadeIn();

    close();


            $.ajax({


                    url: 'refresh_pretty_comments' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'post_id': post_id } ),


                      success: function (result) {
                       /* console.log(result);*/
                      $(".svg-loader").fadeOut();
                      $('.pretty-comments-sections' + post_id).fadeOut(100).fadeIn(100).fadeOut(100).html('').html(result.pretty_comments).fadeIn(100);

                      $('.no-of-views' + post_id).fadeOut(100).fadeIn(100).fadeOut(100).html('').html(result.posts_count).fadeIn(100);

                      $('.no-of-comments' + post_id).fadeOut(100).fadeIn(100).fadeOut(100).html('').html(result.comments_count).fadeIn(100);




                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });


    });









    $(document).on('click','#move-to-comments', function(){

        $("#view-modal").hide(100);


            var post_id = $(this).attr('post_id');

            console.log(post_id);

            comment_modal = $("#comment-modal-wrap")

            comment_modal.show(150);

            loader = $("#comment-loader").html();

            $(".comment-modal-body-wrap").html(loader)

            $("#comment-modal-wrap").show(150);

            $('#close-modal').attr('post_id', post_id);


            $.ajax({


                    url: 'quick-comment',
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( {'post_id': post_id } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      $(".comment-modal-body-wrap").fadeOut(100).fadeIn(100).html(result);
                      

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });
            






    });













    $(document).on('click','#quick_comment', function(){

            
            

            var post_id = $(this).attr('post_id');

            console.log(post_id);

            comment_modal = $("#comment-modal-wrap")

            comment_modal.show(150);

            loader = $("#comment-loader").html();

            $(".comment-modal-body-wrap").html(loader)

            $("#comment-modal-wrap").show(150);

            $('#close-modal').attr('post_id', post_id);


            $.ajax({


                    url: 'quick-comment',
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( {'post_id': post_id } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      $(".comment-modal-body-wrap").fadeOut(100).fadeIn(100).html(result);
                      

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });










    });







    $(document).on('click','#load-comments-button', function(){


            var post_id = $(this).attr('post_id');
/*          window.alert(post_id)*/


            var count = $(this).attr('count');
            /*window.alert(count)*/


            loader = $("#comment-loader").html();

            $(".comment-modal-body-wrap").html(loader)


                    $(".svg-loader").fadeIn(10);

                        req = $.ajax({  
                            url: 'load-more-comments',
                            type : 'POST',
                            contentType: 'application/json',
                            data : JSON.stringify ( {'post_id': post_id, 'count': count  } )

             
                        });


                        req.done(function(data){

                            $(".svg-loader").fadeOut(100, function() {

                               $(".comment-modal-body-wrap").fadeOut(100).fadeIn(100).html(data);        

                        });



            });



    });





    $(document).on('click','.commentbutton', function(){


            var post_id = $(this).attr('post_id');
            console.log(post_id);

/*            $('.comment_portal' + post_id).val('nice one') ;
*/
            var comment_body = $('#comment_portal' + post_id).val(); 

/*          window.alert(comment_body)*/

            console.log(comment_body);




            req = $.ajax({  
                url: 'post-view-page/add-comment',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'post_id': post_id, 'comment_body' : comment_body } )

 
            });
/*
            window.alert('ajax query block passed')*/


            req.done(function(data){

                $(".comment-modal-body-wrap" ).fadeOut(200).fadeIn(200).html(data);
                /*
                window.alert('req was sucessful')
                window.alert("data:", data) */

            });


    });





    $(document).on('click','button#delete_comment_button', function(){


            var post_id = $(this).attr('post_id');
/*          window.alert(post_id)*/



            var comment_id = $(this).attr('comment_id');
/*          window.alert(comment_id)*/

            $(".svg-loader").fadeIn()


            req = $.ajax({  
                url: 'post-view-page/delete-comment',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'post_id': post_id, 'comment_id' : comment_id } )

 
            });

/*          window.alert('ajax query block passed')*/


            req.done(function(data){

                $(".comment-modal-body-wrap" ).fadeOut(200).fadeIn(200).html(data);
                /*
                window.alert('req was sucessful')
                window.alert("data:", data) */

            });

    });










































/*END OF COMMENTS*/


    $(document).on('click','#delete-post-svg', function(){

            var post_id = $(this).attr('post_id');

            var command = $(this).attr('command');

            var page = 1;

            var post_type = "normal"


/*          window.alert(post_id)*/


            $(".svg-loader").fadeIn(100);

                        req = $.ajax({  
                            url: 'full_view_post_handler',
                            type : 'POST',
                            contentType: 'application/json',
                            data : JSON.stringify ( {'post_id': post_id, 'command': command } )

             
                        });





                        req.done(function(data){

                                $(".svg-loader").fadeOut(300);

                                 if (data == "post sucessfully deleted!"){

                                    $("#view-modal").hide(200);

                                    show_success_report(" post deleted successfully! ")

                                 };




                                setTimeout(function () {


                                            req2 = $.ajax({  

                                                url: 'posts-page-jq-update',
                                                type : 'POST',
                                                contentType: 'application/json',
                                                data : JSON.stringify ( {'page': page, 'post_type' : post_type } )

                     
                                            });



                                            req2.done(function(data){
                                                
                                                $(".svg-loader").fadeOut(500, function() {
                                                    $("#encapsulator").fadeOut(500).fadeIn(500).html(data);        
                                                });             


                                            });




                                }, 1000);





                                      
                        });




    });











    $(document).on('click','#save-post', function(){

            var post_id = $(this).attr('post_id');

            var command = $(this).attr('command');

            var post_category = $(this).attr('post_category');

            var page = 1;

            var post_type = "normal"


/*          window.alert(post_id)*/


            $(".svg-loader").fadeIn(100);

                        req = $.ajax({  
                            url: 'full_view_post_handler',
                            type : 'POST',
                            contentType: 'application/json',
                            data : JSON.stringify ( {'post_id': post_id, 'command': command, "post_category": post_category } )

             
                        });




                        req.done(function(data){

                                $(".svg-loader").fadeOut(300);

                                 if (data == "we have saved the new item"){

                                    show_success_report(" post saved successfully! ")

                                 }else if(data == "you have already saved this"){

                                    show_error_report(" you've already saved this")

                                 }


                                      
                        });




    });










    $(document).on('click', function(e){


                if (!

            (( $(e.target).closest("#post-options").length > 0 || 


            ($(e.target).closest('#control-post').length>0 )))

                     ){

                $("#post-options").hide(100);
            }


    });






    $(document).on('click', function(e){


                if (!

            (( $(e.target).closest(".post-options-front-list").length > 0 || 


            ($(e.target).closest('.post-options-front-btn').length>0 )))

                     ){

                $(".post-options-front-list").hide(100);
            }



    });











    $(document).on('click','button#followed_button', function(){

            var page = $(this).attr('page');
            // window.alert(page)

            var post_type = $(this).attr('post_type');
            // window.alert(post_type)

/*          var dict = {page: 'page', post_type : 'post_type'}
            window.alert(dict)*/

/*          var name = $('nameInput' + member_id).val();

            var email = $('emailInput' + member_id).val();*/


            /*initialise the loader*/
            $(".svg-loader").fadeIn(1)

            req = $.ajax({  
                url: 'posts-page-jq-update',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'page': page, 'post_type' : post_type } )

 
            });

    /*      window.alert('ajax query block passed')*/




            req.done(function(data){
/**/
                
                
                $(".svg-loader").fadeOut(500, function() {
                    $("#encapsulator").fadeOut(500).fadeIn(500).html(data);        
                });





            });


    });







    $(document).on('click','button#quick_follow', function(){

            var post_id = $(this).attr('post_id');
/*          window.alert(post_id)*/

            var user_id = $(this).attr('user_id');
/*          window.alert(email)*/

            var info_type = "follow"

            req = $.ajax({  
                url: 'quick-follow',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'post_id': post_id, 'user_id' : user_id } )


            });





            req.done(function(data){

                $(".quick_buttons" + user_id).each(function(){
                    console.log('fond');
                            $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).html(data);
                });


            });




    });




    $(document).on('click','button#quick_unfollow', function(){

            var post_id = $(this).attr('post_id');
/*          window.alert(post_id)*/

            var user_id = $(this).attr('user_id');
/*          window.alert(email)*/

            
            var info_type = "unfollow"


            req = $.ajax({  
                url: 'quick-unfollow',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'post_id': post_id, 'user_id' : user_id } )

 
            });




            req.done(function(data){

                $(".quick_buttons" + user_id ).each(function(){
                    //console.log('fond');
                            $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).html(data);
                });


            });





    });




    $(document).on('click','button#normal_button.active', function(){

            var page = $(this).attr('page');
            // window.alert(page)

            var post_type = $(this).attr('post_type');
            // window.alert(post_type)

/*          var dict = {page: 'page', post_type : 'post_type'}
            window.alert(dict)*/

/*          var name = $('nameInput' + member_id).val();

            var email = $('emailInput' + member_id).val();*/

            req = $.ajax({  
                url: 'posts-page-jq-update',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'page': page, 'post_type' : post_type } )

 
            });

    /*      window.alert('ajax query block passed')*/



            /*initialise the loader*/
            $(".svg-loader").fadeIn(1)

            req.done(function(data){
/**/
                
                $(".svg-loader").fadeOut(500, function() {
                    $("#encapsulator").fadeOut(500).fadeIn(500).html(data);        
                });             



/*              $("#encapsulator").fadeOut(800).fadeIn(800).html(data);

*/              /*
                window.alert('req was sucessful')
                window.alert("data:", data)*/

            });

    });








    $(document).on('click','button#lost_item_button', function(){

            var page = $(this).attr('page');
/*          window.alert(page)*/

            var post_type = $(this).attr('post_type');
/*          window.alert(post_type)*/



            /*initialise the loader*/
            $(".svg-loader").fadeIn(1)

            req = $.ajax({  
                url: 'posts-page-jq-update',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'page': page, 'post_type' : post_type } )

 
            });

    /*      window.alert('ajax query block passed')*/


            req.done(function(data){
/**/
                


            $(".svg-loader").fadeOut(500, function() {
                $("#encapsulator").fadeOut(500).fadeIn(500).html(data);        
            });             



/*
                $("#encapsulator").fadeOut(800).fadeIn(800).html(data);

*/              /*
                window.alert('req was sucessful')
                window.alert("data:", data)*/

            });

    });









    $(document).on('click','button#found_item_button', function(){

            var page = $(this).attr('page');
/*          window.alert(page)*/

            var post_type = $(this).attr('post_type');
/*          window.alert(post_type)*/

/*          var dict = {page: 'page', post_type : 'post_type'}
            window.alert(dict)*/

/*          var name = $('nameInput' + member_id).val();

            var email = $('emailInput' + member_id).val();*/


            /*initialise the loader*/
            $(".svg-loader").fadeIn(1)

            req = $.ajax({  
                url: 'posts-page-jq-update',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'page': page, 'post_type' : post_type } )

 
            });

/*          window.alert('ajax query block passed')*/


            req.done(function(data){
/**/
                
                            
                $(".svg-loader").fadeOut(500, function() {
                    $("#encapsulator").fadeOut(500).fadeIn(500).html(data);        
                });


/*
                $("#encapsulator").fadeOut(800).fadeIn(800).html(data);*/
                /*
                window.alert('req was sucessful')
                window.alert("data:", data)*/

            });

    });






    $(document).on('click','button#claimed_item_button', function(){

            var page = $(this).attr('page');
/*          window.alert(page)*/

            var post_type = $(this).attr('post_type');
/*          window.alert(post_type)*/

/*          var dict = {page: 'page', post_type : 'post_type'}
            window.alert(dict)*/

/*          var name = $('nameInput' + member_id).val();

            var email = $('emailInput' + member_id).val();*/


            /*initialise the loader*/
            $(".svg-loader").fadeIn(1)

            req = $.ajax({  
                url: 'posts-page-jq-update',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'page': page, 'post_type' : post_type } )

 
            });

/*          window.alert('ajax query block passed')*/


            req.done(function(data){
/**/
                
                            
                $(".svg-loader").fadeOut(500, function() {
                    $("#encapsulator").fadeOut(500).fadeIn(500).html(data);        
                });


/*
                $("#encapsulator").fadeOut(800).fadeIn(800).html(data);*/
                /*
                window.alert('req was sucessful')
                window.alert("data:", data)*/

            });

    });







    $(document).on('click','input#foundbtn', function(){

            var each = $('option:selected').val();

            var page = $('#lost_item_category').attr('page');
        /*  window.alert(each)*/

            var item_type = each
/*          window.alert(item_type)*/

/*          var dict = {page: 'page', post_type : 'post_type'}
            window.alert(dict)*/

/*          var name = $('nameInput' + member_id).val();

            var email = $('emailInput' + member_id).val();*/


            /*initialise the loader*/
            $(".svg-loader").fadeIn(1)

            req = $.ajax({  
                url: 'posts-found-category',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( { 'page' : page , 'item_type' : item_type } )

 
            });

/*          window.alert('ajax query block passed')

*/
            req.done(function(data){
/**/
                
                            
                $(".svg-loader").fadeOut(500, function() {
                    $("#small_content").fadeOut(500).fadeIn(500).html(data);        
                });




            });

    });










    $(document).on('click','input#filterbtn', function(){

            var each = $('option:selected').val();

            var page = $('#lost_item_category').attr('page');
        /*  window.alert(each)*/

            var item_type = each
/*          window.alert(item_type)*/

/*          var dict = {page: 'page', post_type : 'post_type'}
            window.alert(dict)*/

/*          var name = $('nameInput' + member_id).val();

            var email = $('emailInput' + member_id).val();*/


            /*initialise the loader*/
            $(".svg-loader").fadeIn(1)

            req = $.ajax({  
                url: 'posts-lost-item-category',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( { 'page' : page , 'item_type' : item_type } )

 
            });

/*          window.alert('ajax query block passed')

*/
            req.done(function(data){
/**/
                
                            
                $(".svg-loader").fadeOut(500, function() {
                    $("#small_content").fadeOut(500).fadeIn(500).html(data);        
                });




            });

    });












    $(document).on('click','#check-post', function(){


            var post_id = $(this).attr('post_id');

            var user = $(this).attr('user');


/*          window.alert(post_id)*/


            $(".svg-loader").fadeIn(100);

                        req = $.ajax({  
                            url: 'full_view_post',
                            type : 'POST',
                            contentType: 'application/json',
                            data : JSON.stringify ( {'post_id': post_id, 'user': user } )

             
                        });



                        req.done(function(data){

                                $(".svg-loader").fadeOut(300, function() {

                                   $("#view-modal").fadeIn(200).html(data);  

                                });

                                      
                        });





    });































































/*

setTimeout(function () {


$('html, body').animate({
scrollTop: $("a.header_link").offset().top
}, 500);


}, 1500);
*/








});


            
      




























