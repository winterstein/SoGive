$(function (){

	// anti spam spider bot emails
	$("span.email").each(function() {
		var name = $(this).attr('name');
		var domain = $(this).attr('domain');
		var email = name+"@"+domain;
		$(this).html("<a href='mailto:"+email+"'>"+email+"</a>");
	});

	$('form#mailing-list').submit(function(e){
		var $f = $(this);
		var data = {};
		$("input,select,textarea", $f).each(function(){
			data[$(this).attr('name')] = $(this).val();
		});
		console.log("data", data);
		$.ajax({
			url: $f.attr('action'),
			data: data
		}).then(function(r) {
			console.log(r);
			notify("Thank you for signing up to our mailing list.", $f);
		});
		e.preventDefault();
	});


	$('form.CTA').submit(function(e){
		var $f = $(this);
		var data = {};
		$("input,select,textarea", $f).each(function(){
			data[$(this).attr('name')] = $(this).val();
		});
		console.log("data", data);
		$.ajax({
			url: $f.attr('action'),
			data: data
		}).then(function(r) {
			console.log(r);
			notify("Thank you - we will be in touch soon.", $f);
		});
		e.preventDefault();
	});

	
	function notify(msg, $f) {
		if ( ! $f) $f = $('form#mailing-list');
		$f.append("<div class='alert alert-success' role='alert'>"+msg+"</div>");
	}

	// The 'Get email updates' button's functionality
	$('#getemailupdates').click(function() {
		$('#getemailupdatesdiv').removeClass('hidden')
		$('#getemailupdatesdiv').toggle( "unfold" );
	});

	// The 'Get Involved' button's functionality
	$('#getinvolvedbutton').click(function() {
		$('#getinvolved-div').removeClass('hidden')
		$('#getinvolved-div').slideToggle();
	});

	// The 'Get Involved' button's functionality
	$('#mobile-getinvolvedbutton').click(function() {
		$('#mobile-getinvolved-div').removeClass('hidden')
		$('#mobile-getinvolved-div').slideToggle();
	});


	// The Accordion Function
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

$(document).ready(function() {
	var representativebutton = document.getElementById("representativebutton");
	var representativediv = document.getElementById("#whatsarepresentativeproject");
	var representativetext = document.getElementById("representativetext");
	$("#whatsarepresentativeproject").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#whatsarepresentativeproject").offset().top
    	}, 500);
    	$(representativebutton).addClass('active');
    	$(representativediv).addClass('show');
    	$(representativetext).addClass('bluehighlight')
	});
});