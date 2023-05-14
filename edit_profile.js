$(document).ready(function(){

	$(document).on('click','button#invisible', function(){

			var user_id = $(this).attr('user_id');

			var email_visibility = $(this).attr('email_visibility');

			req = $.ajax({  
				url: 'email_visibility',
				type : 'POST',
				contentType: 'application/json',
				data : JSON.stringify ( { 'user_id' : user_id, 'email_visibility' : email_visibility } )

			});


			req.done(function(data){

				$("div.visibility-container").fadeOut(500).fadeIn(500).html(data);

		});


	});




	$(document).on('click','button#visible', function(){

			var user_id = $(this).attr('user_id');

			var email_visibility = $(this).attr('email_visibility');

			req = $.ajax({  
				url: 'email_visibility',
				type : 'POST',
				contentType: 'application/json',
				data : JSON.stringify ( { 'user_id' : user_id, 'email_visibility' : email_visibility } )

			});


			req.done(function(data){

				$("div.visibility-container").fadeOut(500).fadeIn(500).html(data);

		});


	});





	$(document).ready( function(){

    $(".svg-loader").fadeOut(500, function() {
        $("body").fadeIn(500);        
    });



	});













});


			


