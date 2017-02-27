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

// The 'Get Involved' button's functionality
$(document).ready(function (){
	$('#mobile-getinvolvedbutton').click(function() {
		$('#mobile-getinvolved-div').removeClass('hidden')
		$('#mobile-getinvolved-div').slideToggle();
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

$(document).ready(function() {
	var jumboHeight = $('.jumbotron').outerHeight();
	function parallax(){
    	var scrolled = $(window).scrollTop();
    	$('.faq-bg').css('height', (jumboHeight-scrolled) + 'px');
	}

	$(window).scroll(function(e){
    	parallax();
	});
});

$(document).ready(function() {
	var jumboHeight = $('.jumbotron').outerHeight();
	function parallax(){
    	var scrolled = $(window).scrollTop();
    	$('.privacy-bg').css('height', (jumboHeight-scrolled) + 'px');
	}

	$(window).scroll(function(e){
    	parallax();
	});
});

$(document).ready(function() {
	var jumboHeight = $('.jumbotron').outerHeight();
	function parallax(){
    	var scrolled = $(window).scrollTop();
    	$('.terms-bg').css('height', (jumboHeight-scrolled) + 'px');
	}

	$(window).scroll(function(e){
    	parallax();
	});
});


// The Accordion Function
$(document).ready(function () {
var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');
var i;

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
    	var setClasses = !this.classList.contains('active');
    		setClass(acc, 'active', 'remove');
    		setClass(panel, 'show', 'remove');

    		if (setClasses) {
 	    	   this.classList.toggle("active");
 	    	   this.nextElementSibling.classList.toggle("show");
  			}
  	}
}

function setClass(els, className, fnName) {
	for (var i = 0; i < els.length; i++) {
   	    els[i].classList[fnName](className);
   	}
}
});