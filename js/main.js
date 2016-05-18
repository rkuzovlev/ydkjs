$(document).ready(function() {
	var body = $('body');
	var scroller = $('.scroll span');

	$('.scroll span').on('click', function() {
		var offset = $('.donate').offset();
		body.animate({scrollTop: offset.top}, 1000);
	});

	var showHideScroller = function(){
		if (body.scrollTop() > 100){
			scroller.addClass('hidden');
		} else {
			scroller.removeClass('hidden');
		}
	}

	$(document).scroll(showHideScroller);

	showHideScroller();
});