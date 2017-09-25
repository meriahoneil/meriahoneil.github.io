$(function() {
	smoothScroll(1000);
	workBelt();
	workLoad();
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href'));

		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}

function workBelt () {
	$('.thumb-unit').click(function(event) {
		$('.work-belt').css('left', '-100%');
		$('.project-container').show()
		event.preventDefault();
	});
	$('.project-return').click(function () {
		$('.work-belt').css('left', '0%');
		$('.project-container').hide(500)
		event.preventDefault();
	});
}

function workLoad() {
	$.ajaxSetup({ cache: true});

	$('.thumb-unit').click(function(event) {
		var $this = $(this),
			newTitle = $this.find('strong').text(),
			spinner = '<div class="loader">Loading...</div>', 
			newFolder = $this.data('folder'),
			newHTML = '/portfolio/' + newFolder + '.html';
		$('.project-load').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);
		event.preventDefault();
	});
}