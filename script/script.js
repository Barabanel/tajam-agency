$(document).ready(function(){

	//-------toggle menu-------------
	$('.main-nav button').on('click', function() {
		$('.main-nav').find('ul').fadeToggle("fast");
		var buttonI = $('.main-nav button i');
		if(buttonI.hasClass('fa-bars')) {
			buttonI.removeClass('fa-bars').addClass('fa-times');
		} else {
			buttonI.removeClass('fa-times').addClass('fa-bars');
		}
	})

	// intern link scroll animation
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	// remove last function if you don't want URL change

	//---text-slider--
	$('.indicators span').on('click', changeText);

	function changeText() {
		var index = $('span').index(this),
			indicator = $('.indicators').find('span'),
			currentIndicator = $('span.active'),
			slides = $('#text-slider').find('.slide'),
			showSlide = slides.eq(index-1),
			currentSlide = $('.slide.curry');
		if(index != (currentSlide.index() + 1)) {
			currentSlide.fadeOut(600);
			currentSlide.removeClass('curry');
			showSlide.fadeIn(1000);
			showSlide.addClass('curry');
			currentIndicator.removeClass('active');
			indicator.eq(index-1).addClass('active');
		}
	}

	//---video play----
	$('.video').on('click', function() {
		if($(this).children('video').get(0).paused) {
			$(this).children('video').get(0).play();
			$(this).children('.video-text').fadeOut();
		} else {
			$(this).children('video').get(0).pause();
			$(this).children('.video-text').fadeIn();
		}
	})

	//-----quote slider----
	var slideIndex = 1,
		slideCount = $('#slider-band').children().length,
		slideInterval = 4000,
		translateWidth = 0,
		switchInterval = setInterval(nextSlide, slideInterval);

	$('#left').on('click', prevSlide);
	$('#right').on('click', nextSlide);
	$('.circle').find('li').on('click', function(){
		slideIndex = $(this).index();
		translateWidth = -$('#quote-slider').width() * (slideIndex - 1) ;
		$('#slider-band').css('transform', 'translate('+ translateWidth + 'px, 0)');
		$('.circle').find('li.active').removeClass('active');
		$(this).addClass('active');
		clearInterval(switchInterval);
	})

	function nextSlide() {
		if(slideIndex >= slideCount) {
			$('#slider-band').css('transform', 'translate(0, 0)');
			translateWidth = 0;
			slideIndex = 1;
		} else {
			translateWidth -= $('#quote-slider').width();
			$('#slider-band').css('transform', 'translate('+ translateWidth + 'px, 0)');
			slideIndex ++;
		}
		$('.circle').find('li.active').removeClass('active');
		$('.circle').find('li').eq(slideIndex-1).addClass('active');
	}

	function prevSlide() {
		if(slideIndex <= 1) {
			$('#slider-band').css('transform', 'translate(' + -$("#quote-slider").width() * (slideCount-1) + 'px, 0)');
			translateWidth = -$('#quote-slider').width() * (slideCount-1);
			slideIndex = slideCount;
		} else {
			translateWidth += $('#quote-slider').width();
			$('#slider-band').css('transform', 'translate('+ translateWidth + 'px, 0)');
			slideIndex --;
		}
		$('.circle').find('li.active').removeClass('active');
		$('.circle').find('li').eq(slideIndex-1).addClass('active');
	}

	//----subscribe form----
	$('form.subscribe button').on('click', function(e) {
		var inputVal = $('.subscribe input').val();
		if(inputVal == "" || inputVal == " " || 
			inputVal.split('@').length - 1 == 0 || inputVal.split('.').length - 1 == 0) {
			e.preventDefault();
			$('.subscribe input').css('border-color', '#f00');
		}
	})

	$('form.subscribe input').on('keyup', function() {
		var inputVal = $('.subscribe input').val();
		if(inputVal != "") {
			$('.subscribe input').css('border-color', 'rgba(255,255,255,0.5)');
		}
	})
	

})