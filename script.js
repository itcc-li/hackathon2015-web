$(function() {

	checkHash();
	
	function showContent(html) {
		$('#content').html(html);
		$('#page-content').fadeIn();
	}
	
	function checkHash() {
		var hash = location.hash;
		
		if (hash === '') {
			$('#page-content').fadeOut();
			return;
		}
		
		hash = hash.substr(1);
		$.post('content/' + hash + '.html', function(data) {
			showContent(data);
		});
	}
	
	$(window).on('hashchange', function() {
		checkHash();
	});
});