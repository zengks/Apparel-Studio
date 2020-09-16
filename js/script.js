
(function(d){
	
	const $body = d.querySelector('body');
	const $btn = d.querySelector('.hamburger');
	
	$btn.addEventListener('click', function(){
		
		$body.classList.toggle('is-active');
		
	});
	
	
})(document);