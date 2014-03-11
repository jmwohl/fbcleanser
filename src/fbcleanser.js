(function() {
	function hideShit() {
		$("div:contains('Suggested Post')").parent().closest('.userContentWrapper').parent().hide();
	}
	hideShit();
	setInterval(hideShit, 5000);
})()