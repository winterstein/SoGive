
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
			notify("Thank you for signing up to our mailing list.");
		});
		e.preventDefault();
	});
	
	function notify(msg) {
		$('form#mailing-list').append("<div class='alert alert-success' role='alert'>"+msg+"</div>");
	}
});