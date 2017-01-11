// The 'Get email updates' button's functionality
$(document).ready(function (){
	$('#getemailupdates').click(function() {
		$('#getemailupdatesdiv').removeClass('hidden')
		$('#getemailupdatesdiv').toggle( "unfold" );
	});
});

// The 'Get Involved' button's functionality
$(document).ready(function (){
	$('#getinvolvedbutton').click(function() {
		$('#getinvolved-div').removeClass('hidden')
		$('#getinvolved-div').slideToggle();
	});
});

// Parallax Scrolling on all Jumbotrons
$(document).ready(function() {
	var jumboHeight = $('.jumbotron').outerHeight();
	function parallax(){
    	var scrolled = $(window).scrollTop();
    	$('.home-bg').css('height', (jumboHeight-scrolled) + 'px');
	}

	$(window).scroll(function(e){
    	parallax();
	});
});

$(document).ready(function() {
	var jumboHeight = $('.jumbotron').outerHeight();
	function parallax(){
    	var scrolled = $(window).scrollTop();
    	$('.about-bg').css('height', (jumboHeight-scrolled) + 'px');
	}

	$(window).scroll(function(e){
    	parallax();
	});
});

$(document).ready(function() {
	var jumboHeight = $('.jumbotron').outerHeight();
	function parallax(){
    	var scrolled = $(window).scrollTop();
    	$('.aims-bg').css('height', (jumboHeight-scrolled) + 'px');
	}

	$(window).scroll(function(e){
    	parallax();
	});
});

$(document).ready(function() {
	var jumboHeight = $('.jumbotron').outerHeight();
	function parallax(){
    	var scrolled = $(window).scrollTop();
    	$('.team-bg').css('height', (jumboHeight-scrolled) + 'px');
	}

	$(window).scroll(function(e){
    	parallax();
	});
});

$(document).ready(function() {
	var jumboHeight = $('.jumbotron').outerHeight();
	function parallax(){
    	var scrolled = $(window).scrollTop();
    	$('.getinvolved-bg').css('height', (jumboHeight-scrolled) + 'px');
	}

	$(window).scroll(function(e){
    	parallax();
	});
});

$(document).ready(function() {
	var jumboHeight = $('.jumbotron').outerHeight();
	function parallax(){
    	var scrolled = $(window).scrollTop();
    	$('.contact-bg').css('height', (jumboHeight-scrolled) + 'px');
	}

	$(window).scroll(function(e){
    	parallax();
	});
});