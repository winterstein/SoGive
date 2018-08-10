
// allow time for the page to fully render
$(function() {
	setTimeout(function() {
		formWiring();
	}, 100);
});

function formWiring() {
	$('form').not('.wired').each(function() {
		// NB: must use function not () => 
		// 'cos they handle this differently.
		const $f = $(this); 		
		$f.addClass('wired');
		const action = $f.attr('action');
		if ( ! action || action.indexOf('profiler.good-loop.com') === -1) return;
		// ajax on-submit
		$f.submit(function(e){
			let ok = validateForm($f);
			if ( ! ok) {
				return;
			}
			var data = {};
			$("input,select,textarea", $f).each(function(){
				data[$(this).attr('name')] = $(this).val();
			});
			// Profiler needs: controller (can usually get from referer, but hey lets be safe)
			if ( ! data.controller) data.controller = window.location.host;
			$.ajax({
				url: action,
				data: data,
				method:'POST'
			}).then(function(r) {
				let $onSuccess = $('onSuccess', $f);
				console.log("$onSuccess", $onSuccess);
				$onSuccess.show();
				if ($onSuccess.length) {
					
				}
			});
			e.preventDefault();
		});
		// avoid repeat wiring
		$f.addClass('wired');
	});
}

/**
 * TODO copy from invest-in-change
 * Can we copy the validation script too?
 */
function validateForm($f) {
	return true;
}