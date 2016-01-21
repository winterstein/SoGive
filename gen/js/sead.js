
$(function(){
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
			alert("Thank you for signing up to our mailing list.");
		});
		e.preventDefault();
	});
});
