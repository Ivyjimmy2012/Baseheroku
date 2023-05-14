$(document).ready(function(){

$(".svg-loader").fadeOut(500);


/* handling profile picture upload */

var img_input = document.getElementById('profile_picture');

var img_preview = document.getElementById('image-preview');

var label = document.getElementsByClassName('img-upload-label');



/*replacing the profile picture*/
img_input.onchange = evt => {
  const [file] = img_input.files
  console.log(img_input.files);
  console.log("filename==>" + img_input.files[0].name);

  $(".profile_picture_save").show(200);

  if (file) {
    img_preview.src = URL.createObjectURL(file)

  }
}














function get_forms(clicked_element){


            var elememt = $(clicked_element);

            var command = elememt.attr('command');

            var user = elememt.attr('user');



            $(".svg-loader").fadeIn(100);

            $.ajax({


                    url: '/get_forms' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'command': command, 'user': user } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      $("#create-post-modal").show(300).html(result);

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
                      $("#create-post-modal").hide(100).html(result);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });



};




       $(document).on('click','#demo', function(){

        $(".bdayy").trigger();
    
        console.log('demo')

        });






       $(document).on('click','#basic', function(){

        $("#create-post-modal").show(300);
        get_forms("#basic");

        });

    


       $(document).on('click','#other', function(){

        $("#create-post-modal").show(300);
        get_forms("#other");

        });

    


       $(document).on('click','#roomie', function(){

        $("#create-post-modal").show(300);
        get_forms("#roomie");

        });





    $(document).on('click','.cancel-post', function(){

    $("#create-post-modal").hide(500);

    });

































function submit_text( data, element_to_give_value, command , user ) {

            console.log('element_to_give_value--->' + element_to_give_value);

            console.log('command---->' + command);

            console.log('user--->' + user);
            
            //console.log('submit text data---->' + data);

            $(".svg-loader").fadeIn(100);

            $.ajax({


                    url: '/edit_user_profile' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'data': data, 'command' : command , 'user' : user  } ),


                      success: function (result) {
                        console.log(result);
                      $(".svg-loader").fadeOut();


                          if (result.response !=  undefined ){
                            show_error_report(result.response);
                            console.log(result.response);
                          }

                          else {
                                                
                            $(element_to_give_value).fadeOut().fadeIn().html(result);

                          }



                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();

                        console.log(result);


                        show_error_report(" this fucntionality has suspended for now ");
                      }


            });





}




var options_case = $(".options_case").clone();


var caser = $(".ddaatattre").clone();




function attach_options(element_to_give_value, provided_list, command ){


/*console.log('list--->' + provided_list);*/

/*console.log('command--->' + command);

console.log('element_to_give_value--->' + element_to_give_value);
*/

    options_case.removeClass('hidden');

    options_case.html(' ');

    var option = "";
    var i;
    for (i = 0; i < provided_list.length; i++) {

     option += "<div class='option_item'  element_to_give_value = ' " + element_to_give_value + " '  command = ' " + command +  " '  id='submit_item' data = ' " + provided_list[i] + " '  > " + provided_list[i] + "</div>";

    }


    options_case.html(option);

    $(element_to_give_value).html(options_case);



};








$(document).on('click','#gender', function(){


attach_options('#users_gender', gender_type, 'submit_gender')


});




$(document).on('click','#faith', function(){

console.log("faith");

attach_options('#users_faith', religions, 'submit_religion' )


});





$(document).on('click','#address', function(){

console.log("address");

attach_options('#users_address', addresses, 'submit_address' )

$('#users_address').find(".options_case").append("<div class='other_option' id='other_options_location'  > other </div>")

});




$(document).on('click','#budget', function(){

console.log("budget");

attach_options('#users_budget', price_range, 'submit_budget' )

$('#users_budget').find(".options_case").append("<div class='other_option' id='other_options_budget'  > other </div>")


});






$(document).on('click','#department', function(){

console.log("department");

attach_options('#users_departments', departments, 'submit_department' )

});





$(document).on('click','#level', function(){

console.log("level");

attach_options('#users_levels', levels, 'submit_level' )

});






$(document).on('click','#relationship', function(){

console.log("relationships");

attach_options('#users_relationship', relationships, 'submit_relationship' )

});





$(document).on('click','#birth_day', function(){

console.log("birthday");


    var element_to_give_value = $(this).attr('element_to_give_value');

    options_case.removeClass('hidden');

    options_case.addClass('options_smaller').show();

    var option = caser.find(".bdayy");

    option.removeClass('hidden').attr('id', 'bdayy');

    options_case.html(caser);

    console.log(options_case.html());
    $('#users_birth_day').html(options_case);


$('#users_birth_day').find(".options_case").append("<div class='other_option' id='sub_option_birthday'  > submit </div>")



});






$(document).on('click','#submit_item', function(){

      /*console.log(
      'selected' + 
      $(this).attr('gender')
        )
      */


      var data = $(this).attr('data');

      var element_to_give_value = $(this).attr('element_to_give_value')  ;

      var command =  $(this).attr('command');

      var user = users_id ;

      submit_text( data, element_to_give_value  , command ,  user );

});






$(document).on('click','#sub_option_birthday', function(){


    console.log( $('#bdayy').val() );



      var data = $('#bdayy').val() ;
      var element_to_give_value = '#users_birth_day' ;

      var command =  'submit_birthday';

      var user = users_id ;



      if (data == ''){

        $('.ddaatattre').css({background:'red'})

      }else{


        console.log('element_to_give_value--->' + element_to_give_value);

        console.log('command---->' + command);

        console.log('user--->' + user);
        
        //console.log('submit text data---->' + data);

        $(".svg-loader").fadeIn(100);

        $.ajax({

                url: '/edit_user_profile' ,
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( { 'data': data, 'command' : command , 'user' : user  } ),


                  success: function (result) {
                    console.log(result);
                  $(".svg-loader").fadeOut();


                      if (result.response !=  undefined ){
                        show_error_report(result.response);
                        console.log(result.response);
                      }

                      else {
                                            
                        $(element_to_give_value).fadeOut().fadeIn().html(result.birth_day);
                        $('#users_star_sign').fadeOut().fadeIn().html(result.star_sign);

                      }


                  },

                  error: function (result) {
                    $(".svg-loader").fadeOut();

                    console.log(result);

                    show_error_report(" this fucntionality has suspended for now ");
                  }


        });


            



      }



});










        $(document).on('click','#likes', function(){

            var target = $(this).attr('element_targeted'); 

            $("#changer_div").find('input').attr('id', 'change_likes_input').attr('class', 'change_likes_input');

            $("#changer_div").find('.subbbmittt').attr('id', 'submit_likes').attr('command', 'submit_likes').attr('element_to_give_value', target ).attr('input_element', '#change_likes_input' )

            $(target).html( $("#changer_div").html() );


        });






       $(document).on('click','#submit_likes', function(){

            console.log( $('#users_likes').find('#change_likes_input').val() )

            console.log($(this).attr('element_to_give_value'));

            console.log($(this).attr('input_element'));

            console.log($(this).attr('command'));
            
            var input_element =  $(this).attr('input_element');

            var data = $('#users_likes').find('#change_likes_input').val();

            var element_to_give_value =  $(this).attr('element_to_give_value');
 
            var command = $(this).attr('command');

            var user = $(this).attr('user');

            submit_text( data, element_to_give_value, command , user );


        });












        $(document).on('click','#dislikes', function(){

            var target = $(this).attr('element_targeted'); 

            $("#changer_div").find('input').attr('id', 'change_dislikes_input').attr('class', 'change_dislikes_input');

            $("#changer_div").find('.subbbmittt').attr('id', 'submit_dislikes').attr('command', 'submit_dislikes').attr('element_to_give_value', target ).attr('input_element', '#change_dislikes_input' )

            $(target).html( $("#changer_div").html() );


        });






       $(document).on('click','#submit_dislikes', function(){

            console.log( $('#users_dislikes').find('#change_dislikes_input').val() )

            console.log($(this).attr('element_to_give_value'));

            console.log($(this).attr('input_element'));

            console.log($(this).attr('command'));
            
            var input_element =  $(this).attr('input_element');

            var data = $('#users_dislikes').find('#change_dislikes_input').val();

            var element_to_give_value =  $(this).attr('element_to_give_value');
 
            var command = $(this).attr('command');

            var user = $(this).attr('user');

            submit_text( data, element_to_give_value, command , user );


        });












        $(document).on('click','#more_about', function(){

            var target = $(this).attr('element_targeted'); 

            console.log(target);

            $("#changer_div").find('input').attr('id', 'change_more_about_input').attr('class', 'change_more_about_input');

            $("#changer_div").find('.subbbmittt').attr('id', 'submit_more_about').attr('command', 'submit_more_about').attr('element_to_give_value', target ).attr('input_element', '#change_more_about_input' )

            $(target).html($("#changer_div").show().css({display:'flex', 'margin-left':'calc(50% - 100px)'}));


        });






       $(document).on('click','#submit_more_about', function(){

            console.log( $('#users_more_about').find('#change_more_about_input').val() )

            console.log($(this).attr('element_to_give_value'));

            console.log($(this).attr('input_element'));

            console.log($(this).attr('command'));
            
            var input_element =  $(this).attr('input_element');

            var data = $('#users_more_about').find('#change_more_about_input').val();

            var element_to_give_value =  $(this).attr('element_to_give_value');
 
            var command = $(this).attr('command');

            var user = $(this).attr('user');

            submit_text( data, element_to_give_value, command , user );


        });










/*       $(document).on('click','.subbbmittt', function(){

            var data = $("#change_gender_input").val();
            console.log(data);

            $(".svg-loader").fadeIn(100);

            $.ajax({


                    url: '/practise' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'data': data  } ),


                      success: function (result) {
                        console.log(result);
                      $(".svg-loader").fadeOut();
                     $("span.change_gender").fadeOut().fadeIn().html(result);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });


        });
*/








});






