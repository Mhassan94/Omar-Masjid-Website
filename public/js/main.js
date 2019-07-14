jQuery(function($) {'use strict',
	//#main-slider
	$(function(){
		$('#main-slider.item').carousel({
			interval: 1000
		});
	});

	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

// Contact form
    var form = $('#main-contact-form');
    form.submit(function(event){
        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            type: "POST", // new addition
            url: $(this).attr('action'),
            data: form.serialize(), // new addition
            beforeSend: function(){
                form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Your Message is being sent...</p>').fadeIn() );
            }
        }).done(function(data){
            form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
        });
    });


	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});
});